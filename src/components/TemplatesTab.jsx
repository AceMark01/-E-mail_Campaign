import React, { useState, useRef, useMemo } from "react";
import { usePopup } from "../context/PopupContext";
import { render } from "@react-email/render";
import { PromotionTemplate } from "../email/PromotionTemplate";
import { Html, Head, Body, Container, Tailwind, Preview, Section } from "@react-email/components";
import {
  CheckCircle, Edit3, X, Image as ImageIcon, Layout, Sparkles,
  ArrowRight, AlertCircle, Filter, Search, Eye, ChevronDown, ChevronUp,
  Type, Link as LinkIcon, Settings, Palette, ArrowDown,
  Plus, Minus, Maximize, Move, Trash2, ArrowUp, ArrowDown as ArrowDownIcon, Layers, GripVertical
} from "lucide-react";
import { BRANDED_TEMPLATES } from "../data/brandedTemplates";
import { DndContext, DragOverlay, useSensor, useSensors, PointerSensor, closestCenter, defaultDropAnimationSideEffects } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { DraggableSidebarItem } from './DraggableSidebarItem';

import { RenderBlock } from '../email/blocks/RenderBlock';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';


const CATEGORIES = [
  { id: "ALL", label: "All Designs" },
  { id: "CLIENTS", label: "Clients" },
  { id: "EMPLOYEES", label: "Employees" },
  { id: "INTERNS", label: "Interns Applied" },
  { id: "LEADS", label: "Potential Leads" },
  { id: "OFFERS", label: "Offers" },
  { id: "FESTIVALS", label: "Festivals" },
  { id: "EVENTS", label: "Events" },
  { id: "ANNOUNCEMENTS", label: "Announcements" },
  { id: "NEWSLETTERS", label: "Newsletters" },
  { id: "ECOMMERCE", label: "E-commerce" }
];

// Helper to map template types to categories
const getCategory = (layoutType, idealFor) => {
  if (!idealFor) return "CLIENTS";

  const idealLower = idealFor.toLowerCase();

  // Exact keyword matches first
  if (idealLower.includes("offer")) return "OFFERS";
  if (idealLower.includes("festival")) return "FESTIVALS";
  if (idealLower.includes("event")) return "EVENTS";
  if (idealLower.includes("announcement")) return "ANNOUNCEMENTS";
  if (idealLower.includes("newsletter")) return "NEWSLETTERS";
  if (idealLower.includes("e-commerce") || idealLower.includes("ecommerce")) return "ECOMMERCE";

  // Audience-based matches
  if (idealLower.includes("lead") || idealLower.includes("potential")) return "LEADS";
  if (idealLower.includes("intern")) return "INTERNS";
  if (idealLower.includes("employee") || idealLower.includes("stakeholder")) return "EMPLOYEES";
  if (idealLower.includes("client") || idealLower.includes("new")) return "CLIENTS";

  // Layout-type fallback
  if (["HERO_SaaS", "PRICING_TABLE", "APP_DOWNLOAD"].includes(layoutType)) return "LEADS";
  if (["QUAD_RETAIL", "FLASH_SALE", "TRUST_PILOT"].includes(layoutType)) return "CLIENTS";
  if (["MODERN_BLOG", "MINIMAL_TEXT"].includes(layoutType)) return "EMPLOYEES";
  if (["Z_PATTERN", "TRIO_FEATURE"].includes(layoutType)) return "INTERNS";

  return "CLIENTS"; // Final fallback
};

export default function TemplatesTab({ onUseTemplate, initialEditingState }) {
  const popup = usePopup();
  const fileInputRef = useRef(null);
  const [uploadTarget, setUploadTarget] = useState(null);
  const [editingTemplateId, setEditingTemplateId] = useState(null);
  const [hoveredTemplateId, setHoveredTemplateId] = useState(null);
  const [exportError, setExportError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("text"); // For the accordion sidebar

  // --- CANVAS STATE ---
  const [zoom, setZoom] = useState(0.9); // Start slightly zoomed out to see full context
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDownloading, setIsDownloading] = useState(false);
  const htmlPreviewRef = useRef(null);

  // DnD State
  const [activeDragItem, setActiveDragItem] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );


  const [mobileView, setMobileView] = useState("edit"); // "edit" or "preview"

  // Reset canvas and view when opening a new template
  React.useEffect(() => {
    if (editingTemplateId) {
      setZoom(0.85);
      setPan({ x: 0, y: 0 });
      setMobileView("edit");
    }
  }, [editingTemplateId]);

  // Prevent browser zoom globally when editor is open and handle canvas zoom
  React.useEffect(() => {
    if (!editingTemplateId) return;

    const handleWheelGlobal = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY * -0.0025; // Faster scroll zoom
        setZoom(prev => Math.min(Math.max(prev + delta, 0.2), 3));
      }
    };

    const handleKeyDownGlobal = (e) => {
      // Prevent Ctrl + +/-/0 from zooming/resetting window
      if ((e.ctrlKey || e.metaKey) && ['=', '-', '0', '+'].includes(e.key)) {
        e.preventDefault();
        if (e.key === '=' || e.key === '+') setZoom(prev => Math.min(prev + 0.2, 3)); // Faster keyboard zoom
        if (e.key === '-') setZoom(prev => Math.max(prev - 0.2, 0.2));
        if (e.key === '0') { setZoom(1); setPan({ x: 0, y: 0 }); }
      }
    };

    window.addEventListener('wheel', handleWheelGlobal, { passive: false });
    window.addEventListener('keydown', handleKeyDownGlobal);

    return () => {
      window.removeEventListener('wheel', handleWheelGlobal);
      window.removeEventListener('keydown', handleKeyDownGlobal);
    };
  }, [editingTemplateId]);

  const startPan = (e) => {
    if (e.target.closest('button') || e.target.closest('input')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const startTouchPan = (e) => {
    if (e.target.closest('button') || e.target.closest('input')) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y });
  };

  const doPan = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const doTouchPan = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPan({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    });
  };

  const endPan = () => {
    setIsDragging(false);
  };



  // Initialize state with default data from constants, overriding with initialEditingState if present
  const [templatesState, setTemplatesState] = useState(() => {
    const defaults = BRANDED_TEMPLATES.reduce((acc, t) => {
      acc[t.id] = { data: { layoutType: t.layoutType, ...t.defaultData } };
      return acc;
    }, {});

    if (initialEditingState?.templateId && initialEditingState?.data) {
      defaults[initialEditingState.templateId].data = initialEditingState.data;
    }
    return defaults;
  });

  // Auto-open editor removed to avoid auto-customize step

  const filteredTemplates = useMemo(() => {
    return BRANDED_TEMPLATES.filter(t => {
      const matchesCategory = activeCategory === "ALL" || getCategory(t.layoutType, t.idealFor) === activeCategory;
      const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.idealFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleExport = async (templateId) => {
    // Reset any previous errors
    setExportError(null);

    try {


      const template = BRANDED_TEMPLATES.find((t) => t.id === templateId);
      const { data } = templatesState[templateId];

      let html = "";

      try {
        // Attempt 1: Try to render with Tailwind for nice inline styles
        // Using "render" from @react-email/render handles Tailwind much better than ReactDOMServer
        html = await render(
          <Html lang="en">
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="x-apple-disable-message-reformatting" />
            </Head>
            <Preview>{data.title || template.name}</Preview>
            <Body style={{ margin: 0, padding: 0, backgroundColor: "#f8fafc", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
              <Tailwind
                config={{
                  theme: {
                    extend: {
                      colors: {
                        sky: { 50: '#f0f9ff', 100: '#e0f2fe', 500: '#0c659f', 600: '#0c659f', 700: '#0369a1' },
                        pink: { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 400: '#f472b6', 500: '#ec4899', 600: '#db2777' },
                        fuchsia: { 50: '#fdf4ff', 100: '#fae8ff', 500: '#d946ef', 600: '#c026d3' },
                        slate: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
                        gray: { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827' },
                        red: { 50: '#fef2f2', 100: '#fee2e2', 400: '#f87171', 500: '#ef4444', 600: '#dc2626' },
                        green: { 50: '#f0fdf4', 100: '#dcfce7', 500: '#22c55e', 600: '#16a34a' },
                        amber: { 100: '#fef3c7', 400: '#fbbf24', 500: '#f59e0b' },
                        emerald: { 400: '#34d399', 500: '#10b981' },
                      },
                      screens: {
                        'sm': '640px',
                        'md': '768px',
                        'lg': '1024px',
                      }
                    }
                  }
                }}
              >
                <Section className="w-full px-4 py-8">
                  <Container className="mx-auto my-0 max-w-[600px] w-full">
                    <PromotionTemplate layoutType={data.layoutType} data={data} uneditable={true} />
                  </Container>
                </Section>
              </Tailwind>
            </Body>
          </Html>,
          { pretty: true }
        );
      } catch (renderError) {
        console.warn("Tailwind render failed, using fallback:", renderError);
        // Fallback: Just render the template raw
        html = await render(
          <PromotionTemplate layoutType={data.layoutType} data={data} uneditable={true} />
        );
      }

      onUseTemplate({
        subject: template.name,
        message: html,
        templateId: templateId,
        data: data
      });
      setEditingTemplateId(null);

    } catch (e) {
      console.error("Critical Export Error:", e);
      setExportError("Something went wrong. Please try a different template.");
      popup.error("Failed to load template. Please try another one.", "Export Failed");
    }
  };

  const handleUpdate = (templateId, field, value) => {
    setTemplatesState((prev) => ({
      ...prev,
      [templateId]: {
        ...prev[templateId],
        data: { ...prev[templateId].data, [field]: value },
      },
    }));
  };

  const triggerImage = (templateId, field) => {
    const input = fileInputRef.current;
    if (input) {
      setUploadTarget({ templateId, field });
      input.click();
    }
  };

  // --- BLOCK MANAGEMENT ---
  const handleAddBlock = (type) => {
    setTemplatesState(prev => {
      const t = prev[editingTemplateId];
      const blocks = t.data.blocks || [];
      const newBlock = { type, content: type === 'text' ? 'New text block...' : type === 'heading' ? 'New Heading' : '', id: Date.now() };
      if (type === 'button') { newBlock.text = 'Click Me'; newBlock.url = '#'; newBlock.color = '#4f46e5'; }

      return {
        ...prev,
        [editingTemplateId]: {
          ...t,
          data: { ...t.data, blocks: [...blocks, newBlock] }
        }
      };
    });
  };

  const handleRemoveBlock = (index) => {
    setTemplatesState(prev => {
      const t = prev[editingTemplateId];
      const blocks = [...(t.data.blocks || [])];
      blocks.splice(index, 1);
      return { ...prev, [editingTemplateId]: { ...t, data: { ...t.data, blocks } } };
    });
  };

  const handleMoveBlock = (index, direction) => {
    setTemplatesState(prev => {
      const t = prev[editingTemplateId];
      const blocks = [...(t.data.blocks || [])];
      if (direction === -1 && index > 0) {
        [blocks[index], blocks[index - 1]] = [blocks[index - 1], blocks[index]];
      } else if (direction === 1 && index < blocks.length - 1) {
        [blocks[index], blocks[index + 1]] = [blocks[index + 1], blocks[index]];
      }
      return { ...prev, [editingTemplateId]: { ...t, data: { ...t.data, blocks } } };
    });
  };

  const handleBlockReorder = (oldIndex, newIndex) => {
    setTemplatesState(prev => {
      const t = prev[editingTemplateId];
      const blocks = [...(t.data.blocks || [])];

      const [movedItem] = blocks.splice(oldIndex, 1);
      blocks.splice(newIndex, 0, movedItem);

      return { ...prev, [editingTemplateId]: { ...t, data: { ...t.data, blocks } } };
    });
  };

  // --- DND HANDLERS ---
  const handleDragStart = (event) => {
    // Don't pan if we are dragging a dnd item
    if (event.active) {
      // Identify what we are dragging
      if (event.active.data.current?.isSidebar) {
        setActiveDragItem({ type: 'sidebar', id: event.active.data.current.type });
      } else {
        // It's a block from the template
        const blockId = event.active.id;
        const blocks = templatesState[editingTemplateId]?.data?.blocks || [];
        const block = blocks.find(b => b.id === blockId);
        setActiveDragItem({ type: 'block', data: block });
      }
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveDragItem(null);

    if (!over) return;

    // 1. Sidebar Item Dropped
    if (active.data.current?.isSidebar) {
      // If dropped over a sortable item or the container, add it
      // Check if we dropped "over" a block?
      const type = active.data.current.type;

      // Based on where we dropped, insert there.
      // For simplicity, if we just drop on the canvas, we append.
      // To be more precise, we need to know the index.

      // If over.id is one of the blocks, insert AFTER it?
      let newIndex = (templatesState[editingTemplateId].data.blocks || []).length;

      const blocks = templatesState[editingTemplateId].data.blocks || [];
      const overIndex = blocks.findIndex(b => b.id === over.id);

      if (overIndex !== -1) {
        newIndex = overIndex + 1;
      }

      // Add the block
      setTemplatesState(prev => {
        const t = prev[editingTemplateId];
        const currentBlocks = t.data.blocks || [];

        const newBlock = {
          type,
          content: type === 'text' ? 'New text block...' : type === 'heading' ? 'New Heading' : '',
          id: Date.now()
        };
        if (type === 'button') { newBlock.text = 'Click Me'; newBlock.url = '#'; newBlock.color = '#4f46e5'; }

        const newBlocks = [...currentBlocks];
        newBlocks.splice(newIndex, 0, newBlock);

        return {
          ...prev,
          [editingTemplateId]: {
            ...t,
            data: { ...t.data, blocks: newBlocks }
          }
        };
      });
    }
    // 2. Existing Block Reordered
    else if (active.id !== over.id) {
      const blocks = templatesState[editingTemplateId].data.blocks || [];
      const oldIndex = blocks.findIndex(b => b.id === active.id);
      const newIndex = blocks.findIndex(b => b.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        handleBlockReorder(oldIndex, newIndex);
      }
    }
  };



  const handleBlockUpdate = (index, field, value) => {
    setTemplatesState(prev => {
      const t = prev[editingTemplateId];
      const blocks = [...(t.data.blocks || [])];
      blocks[index] = { ...blocks[index], [field]: value };
      return { ...prev, [editingTemplateId]: { ...t, data: { ...t.data, blocks } } };
    });
  };

  // Wrapper for block image upload
  const triggerBlockImage = (index) => {
    // We hijack the field param to pass "BLOCK_index"
    triggerImage(editingTemplateId, `BLOCK_${index}`);
  };

  // Modified file handler to support blocks
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || !uploadTarget) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (uploadTarget.field.startsWith('BLOCK_')) {
        const index = parseInt(uploadTarget.field.split('_')[1]);
        handleBlockUpdate(index, 'src', reader.result);
      } else {
        handleUpdate(uploadTarget.templateId, uploadTarget.field, reader.result);
      }
      setUploadTarget(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadPDF = async () => {
    const element = htmlPreviewRef.current;
    if (!element) return;

    setIsDownloading(true);
    try {
      // Use html-to-image to capture the element as a PNG (supports modern CSS like oklch)
      const dataUrl = await toPng(element, {
        cacheBust: true, // Forces loading the image from server to bypass CORS issues if headers aren't perfect
        pixelRatio: 2,   // High resolution
        backgroundColor: '#ffffff'
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();

      // Calculate height based on A4 width and Image Aspect Ratio
      // We load the dataUrl into a temporary image to get dimensions if needed, 
      // but actually we can just deduce aspect ratio from the element dimensions.
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
      const pdfHeight = (elementHeight * pdfWidth) / elementWidth;

      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);

      const fileName = BRANDED_TEMPLATES.find(t => t.id === editingTemplateId)?.name || 'template';
      pdf.save(`${fileName.replace(/\s+/g, '_')}.pdf`);

    } catch (err) {
      console.error("PDF Download failed:", err);
      popup.error(`Failed to download PDF: ${err.message || err}`, "Download Error");
    } finally {
      setIsDownloading(false);
    }
  };



  return (
    <div className="bg-slate-50/50 p-6 md:p-10 font-sans">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/gif, image/webp"
      />

      {/* --- HEADER --- */}
      <header className="mb-6 max-w-6xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-wide shadow-sm mb-2">
              <Sparkles size={12} />
              <span>Premium Library</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Email Templates
            </h1>
            <p className="text-sm text-slate-500 max-w-xl leading-relaxed mt-1">
              Select a responsive design to start. All templates are optimized for mobile & desktop.
            </p>
          </div>

          {/* --- FILTERS & SEARCH (Moved to header right) --- */}
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-sky-100 transition-all font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {CATEGORIES.map(cat => <option key={cat.id} value={cat.id}>{cat.label}</option>)}
            </select>
          </div>
        </div>
      </header>

      {/* --- GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto pb-20">
        {/* BLANK TEMPLATE OPTION */}
        <div
          className="group relative bg-white rounded-xl border-2 border-dashed border-slate-200 hover:border-sky-300 hover:bg-slate-50 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-8 text-center"
          onClick={() => onUseTemplate({ subject: "New Campaign", message: "<div>Start typing your message here...</div>", templateId: null, data: {} })}
        >
          <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-sky-600 group-hover:scale-110 transition-all mb-4">
            <Plus size={32} />
          </div>
          <h3 className="font-bold text-slate-800">Blank Email</h3>
          <p className="text-xs text-slate-400 mt-1">Start from scratch without a layout</p>
        </div>

        {filteredTemplates.map((t) => {
          const { data } = templatesState[t.id];
          const isHovered = hoveredTemplateId === t.id;

          return (
            <div
              key={t.id}
              className="group relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-100 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex flex-col"
              onMouseEnter={() => setHoveredTemplateId(t.id)}
              onMouseLeave={() => setHoveredTemplateId(null)}
            >
              {/* Preview Window (Miniature) */}
              <div
                className="relative h-[250px] bg-slate-50 overflow-hidden cursor-pointer"
                onClick={() => handleExport(t.id)}
              >
                {/* Scaled Preview */}
                <div className="absolute inset-0 flex items-start justify-center p-2 overflow-hidden">
                  <div className="origin-top transform scale-[0.28] w-[600px]" style={{ transformOrigin: 'top center' }}>
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-slate-100">
                      <PromotionTemplate layoutType={data.layoutType} data={data} uneditable={true} />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay - Visible by default on mobile, hover-only on desktop */}
                <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] transition-all duration-200 flex flex-col items-center justify-center gap-2 ${isHovered ? 'opacity-100' : 'opacity-100 md:opacity-0 md:pointer-events-none'} pointer-events-auto md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingTemplateId(t.id);
                    }}
                    className="bg-white text-slate-900 w-32 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-1.5 transform transition-transform hover:scale-105"
                  >
                    <Edit3 size={12} /> Customize
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExport(t.id);
                    }}
                    className="bg-sky-600 text-white w-32 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-1.5 transform transition-transform hover:scale-105 hover:bg-sky-500"
                  >
                    <CheckCircle size={12} /> Select
                  </button>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3 bg-white border-t border-slate-50 flex items-center justify-between relative z-10">
                <div className="min-w-0 pr-2">
                  <h3 className="font-bold text-slate-800 text-sm leading-tight truncate">{t.name}</h3>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mt-0.5 truncate">{t.idealFor}</p>
                </div>
                <div className="bg-slate-50 p-1.5 rounded-xl text-slate-300 group-hover:text-sky-600 group-hover:bg-sky-50 transition-colors">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          );
        })}
        {filteredTemplates.length === 0 && (
          <div className="col-span-full text-center py-20 text-slate-400">
            <Layout size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-sm">No templates found matching your search.</p>
          </div>
        )}
      </div>

      {/* --- FULL SCREEN EDITOR MODAL --- */}
      {editingTemplateId && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-slate-50 animate-in fade-in duration-300">

          {/* Editor Header */}
          <header className="flex-none bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm z-50">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setEditingTemplateId(null)}
                className="p-2 -ml-2 hover:bg-slate-100 rounded-xl text-slate-500 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 truncate max-w-[120px] sm:max-w-none">
                  {BRANDED_TEMPLATES.find(t => t.id === editingTemplateId)?.name}
                  <span className="px-2 py-0.5 rounded-xl text-[10px] font-bold bg-sky-100 text-sky-700 uppercase tracking-wider hidden sm:inline-block">Editing</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 p-2.5 rounded-xl text-xs font-bold shadow-sm flex items-center gap-2 transition-all"
                title="Download PDF"
              >
                {isDownloading ? <span className="animate-spin text-[10px]">⏳</span> : <ArrowDown size={16} />}
                <span className="hidden sm:inline">PDF</span>
              </button>
              <button
                onClick={() => handleExport(editingTemplateId)}
                className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2.5 rounded-xl font-bold shadow-md shadow-sky-200 flex items-center gap-2 transition-all active:scale-95 group text-xs"
              >
                <span>Use Template</span>
                <ArrowRight size={16} className="text-sky-200 group-hover:text-white transition-colors hidden sm:inline" />
              </button>
            </div>
          </header>

          {/* Editor Workspace with Sidebar */}
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {/* Mobile View Toggle */}
            <div className="md:hidden flex bg-white border-b border-slate-200 p-2 gap-2">
                <button 
                  onClick={() => setMobileView("edit")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mobileView === 'edit' ? 'bg-sky-50 text-sky-700 shadow-inner border border-sky-100' : 'text-slate-500'}`}
                >
                  Edit Settings
                </button>
                <button 
                  onClick={() => setMobileView("preview")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mobileView === 'preview' ? 'bg-sky-50 text-sky-700 shadow-inner border border-sky-100' : 'text-slate-500'}`}
                >
                  View Preview
                </button>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col md:flex-row h-full">

              {/* --- CUSTOMIZATION SIDEBAR --- */}
              <div className={`w-full md:w-80 bg-white border-r border-slate-200 overflow-y-auto flex-1 md:flex-none z-10 shadow-sm custom-scrollbar ${mobileView === 'edit' ? 'block' : 'hidden md:block'}`}>

                <div className="p-4 border-b border-slate-100 bg-slate-50/50 sticky top-0 z-20 backdrop-blur-sm">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Settings size={16} className="text-slate-400" />
                    Customize Template
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Edit content, images, and links.</p>
                </div>

                <div className="p-4 space-y-2">
                  {(() => {
                    const templateData = templatesState[editingTemplateId]?.data || {};

                    // Helper to group fields
                    const getFieldGroups = (data) => {
                      const groups = {
                        text: { id: 'text', title: "Text & Content", icon: <Type size={16} />, fields: [] },
                        media: { id: 'media', title: "Images & Media", icon: <ImageIcon size={16} />, fields: [] },
                        actions: { id: 'actions', title: "Links & Buttons", icon: <LinkIcon size={16} />, fields: [] },
                        other: { id: 'other', title: "Other Details", icon: <Palette size={16} />, fields: [] }
                      };

                      Object.keys(data).forEach(key => {
                        const k = key.toLowerCase();
                        if (k === 'layouttype') return; // Skip layout type

                        if (k.match(/img|banner|logo|src|qr|background/)) groups.media.fields.push(key);
                        else if (k.match(/link|url|href|cta/)) groups.actions.fields.push(key);
                        else if (k.match(/desc|text|title|heading|content|badge|review|author|name|pricefeature|price|excerpt/)) groups.text.fields.push(key);
                        else groups.other.fields.push(key);
                      });

                      return Object.values(groups).filter(g => g.fields.length > 0);
                    };

                    const groups = getFieldGroups(templateData);

                    return groups.map((group) => {
                      const isOpen = activeSection === group.id;

                      return (
                        <div key={group.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                          {/* Accordion Header */}
                          <div
                            onClick={() => setActiveSection(isOpen ? null : group.id)}
                            className={`flex items-center justify-between p-3 cursor-pointer select-none transition-colors ${isOpen ? 'bg-sky-50 text-sky-800' : 'hover:bg-slate-50 text-slate-700'}`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className={`${isOpen ? 'text-sky-600' : 'text-slate-400'}`}>{group.icon}</span>
                              <span className="font-bold text-sm">{group.title}</span>
                            </div>
                            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} className="text-slate-400" />}
                          </div>

                          {/* Accordion Body */}
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-3 space-y-4 bg-white border-t border-slate-100">
                              {group.fields.map(field => (
                                <div key={field}>
                                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 ml-1">
                                    {field.replace(/([A-Z])/g, ' $1').trim()}
                                  </label>

                                  {group.id === 'media' ? (
                                    <div className="flex flex-col gap-2">
                                      {templateData[field] && (
                                        <img src={templateData[field]} alt={field} className="w-full h-24 object-cover rounded-xl border border-slate-200 bg-slate-50" />
                                      )}
                                      <button
                                        onClick={() => triggerImage(editingTemplateId, field)}
                                        className="w-full py-2 bg-slate-50 border border-slate-200 border-dashed rounded-xl text-xs font-bold text-slate-500 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50 transition-all flex items-center justify-center gap-2"
                                      >
                                        <ImageIcon size={12} /> Replace Image
                                      </button>
                                    </div>
                                  ) : (
                                    <textarea
                                      rows={field.toLowerCase().includes('content') || field.toLowerCase().includes('desc') ? 3 : 1}
                                      value={templateData[field] || ''}
                                      onChange={(e) => handleUpdate(editingTemplateId, field, e.target.value)}
                                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-700 placeholder-slate-400 resize-none font-mono"
                                      placeholder={`Enter ${field}...`}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    });
                  })()}

                  {/* --- ADD ELEMENTS (CANVAS TOOLS) --- */}
                  <div className="mt-8 mb-4 border-t border-slate-100 pt-6">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 px-1 mb-3">
                      <Plus size={16} className="text-slate-400" />
                      Add Elements
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {/* WRAP BUTTONS IN DRAGGABLE ITEM */}
                      <DraggableSidebarItem type="text" onClick={() => handleAddBlock('text')}>
                        <div className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-200 hover:shadow-md rounded-xl flex flex-col items-center gap-1 transition-all text-slate-600 hover:text-sky-600 cursor-grab active:cursor-grabbing">
                          <Type size={18} /> <span className="text-[10px] font-bold uppercase">Text</span>
                        </div>
                      </DraggableSidebarItem>

                      <DraggableSidebarItem type="heading" onClick={() => handleAddBlock('heading')}>
                        <div className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-200 hover:shadow-md rounded-xl flex flex-col items-center gap-1 transition-all text-slate-600 hover:text-sky-600 cursor-grab active:cursor-grabbing">
                          <Type size={22} className="font-black" /> <span className="text-[10px] font-bold uppercase">Heading</span>
                        </div>
                      </DraggableSidebarItem>

                      <DraggableSidebarItem type="image" onClick={() => handleAddBlock('image')}>
                        <div className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-200 hover:shadow-md rounded-xl flex flex-col items-center gap-1 transition-all text-slate-600 hover:text-sky-600 cursor-grab active:cursor-grabbing">
                          <ImageIcon size={18} /> <span className="text-[10px] font-bold uppercase">Image</span>
                        </div>
                      </DraggableSidebarItem>

                      <DraggableSidebarItem type="button" onClick={() => handleAddBlock('button')}>
                        <div className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-200 hover:shadow-md rounded-xl flex flex-col items-center gap-1 transition-all text-slate-600 hover:text-sky-600 cursor-grab active:cursor-grabbing">
                          <div className="w-5 h-3 bg-current rounded-lg border border-current"></div> <span className="text-[10px] font-bold uppercase">Button</span>
                        </div>
                      </DraggableSidebarItem>

                      <DraggableSidebarItem type="divider" onClick={() => handleAddBlock('divider')}>
                        <div className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-200 hover:shadow-md rounded-xl flex flex-col items-center gap-1 transition-all text-slate-600 hover:text-sky-600 cursor-grab active:cursor-grabbing">
                          <Minus size={18} /> <span className="text-[10px] font-bold uppercase">Divider</span>
                        </div>
                      </DraggableSidebarItem>

                      <DraggableSidebarItem type="spacer" onClick={() => handleAddBlock('spacer')}>
                        <div className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-200 hover:shadow-md rounded-xl flex flex-col items-center gap-1 transition-all text-slate-600 hover:text-sky-600 cursor-grab active:cursor-grabbing">
                          <Layout size={18} /> <span className="text-[10px] font-bold uppercase">Spacer</span>
                        </div>
                      </DraggableSidebarItem>

                    </div>
                  </div>

                  {/* --- LAYERS --- */}
                  {templatesState[editingTemplateId].data.blocks && templatesState[editingTemplateId].data.blocks.length > 0 && (
                    <div className="mt-6 border-t border-slate-100 pt-6">
                      <h3 className="font-bold text-slate-900 flex items-center gap-2 px-1 mb-3">
                        <Layers size={16} className="text-slate-400" />
                        Layers
                      </h3>
                      <div className="space-y-2">
                        {templatesState[editingTemplateId].data.blocks.map((block, i) => (
                          <div key={i} className="flex items-center justify-between text-xs p-2 bg-slate-50 rounded-lg border border-slate-100 group hover:border-sky-200">
                            <div className="font-bold text-slate-600 uppercase flex items-center gap-2">
                              {block.type === 'text' && <Type size={12} />}
                              {block.type === 'image' && <ImageIcon size={12} />}
                              {block.type === 'button' && <div className="w-3 h-2 bg-slate-400 rounded-lg"></div>}
                              {block.type}
                            </div>
                            <div className="flex items-center gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => handleMoveBlock(i, -1)} className="p-1 hover:bg-slate-200 rounded text-slate-500"><ArrowUp size={12} /></button>
                              <button onClick={() => handleMoveBlock(i, 1)} className="p-1 hover:bg-slate-200 rounded text-slate-500"><ArrowDown size={12} /></button>
                              <button onClick={() => handleRemoveBlock(i)} className="p-1 hover:bg-red-100 rounded text-red-500"><Trash2 size={12} /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* --- PREVIEW AREA (CANVAS) --- */}
              <div
                className={`flex-1 bg-slate-100/50 relative overflow-hidden cursor-grab active:cursor-grabbing ${mobileView === 'preview' ? 'block' : 'hidden md:block'}`}
                onMouseDown={startPan}
                onMouseMove={doPan}
                onMouseUp={endPan}
                onMouseLeave={endPan}
                onTouchStart={startTouchPan}
                onTouchMove={doTouchPan}
                onTouchEnd={endPan}
                style={{
                  backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              >

                {exportError && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg z-50">
                    <AlertCircle size={18} />
                    <span>{exportError}</span>
                  </div>
                )}

                {/* CANVAS CONTROLS */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-2 bg-white p-2 rounded-xl shadow-xl border border-slate-200 z-50">
                  <button onClick={() => setZoom(z => Math.min(z + 0.2, 3))} className="p-2 hover:bg-slate-50 text-slate-600 rounded-lg transition-colors"><Plus size={20} /></button>
                  <div className="text-xs font-bold text-center text-slate-400 select-none pb-1">{Math.round(zoom * 100)}%</div>
                  <button onClick={() => setZoom(z => Math.max(z - 0.2, 0.2))} className="p-2 hover:bg-slate-50 text-slate-600 rounded-lg transition-colors"><Minus size={20} /></button>
                  <div className="w-full h-px bg-slate-200 my-1"></div>
                  <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} className="p-2 hover:bg-slate-50 text-slate-600 rounded-lg transition-colors" title="Reset View"><Maximize size={20} /></button>
                </div>

                {/* TRANSFORM CONTAINER */}
                <div
                  className="w-full h-full flex items-center justify-center transition-transform duration-75 ease-out origin-center will-change-transform"
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`
                  }}
                >
                  {/* Simulation of Laptop/Browser Window */}
                  <div className="bg-white shadow-2xl rounded-xl w-[600px] min-h-[800px] h-fit border border-slate-200 flex flex-col overflow-hidden">
                    {/* Faux Browser Chrome */}
                    <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="bg-white border border-slate-200 text-xs text-slate-400 py-1 px-3 rounded-md mx-auto w-1/2 max-w-[200px]">
                          preview.html
                        </div>
                      </div>
                      <div className="w-12"></div>
                    </div>

                    {/* The Actual Content */}
                    <div ref={htmlPreviewRef} className="flex-1 bg-white">
                      <PromotionTemplate
                        layoutType={templatesState[editingTemplateId].data.layoutType}
                        data={templatesState[editingTemplateId].data}
                        onUpdate={(field, value) => handleUpdate(editingTemplateId, field, value)}
                        onImageClick={(field) => triggerImage(editingTemplateId, field)}
                        onBlockUpdate={handleBlockUpdate}
                        onBlockImageClick={triggerBlockImage}
                        onBlockReorder={handleBlockReorder}
                        uneditable={false}
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Tips Toast (Moved to bottom left to avoid zoom controls) */}
                <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur text-white px-5 py-3 rounded-2xl shadow-2xl flex flex-col gap-2 z-40 pointer-events-none border border-slate-700/50 max-w-[200px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-1">
                    <Sparkles size={12} className="text-amber-400" /> PRO TIPS
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-sky-500 p-1 rounded-md mb-auto"><Move size={10} /></div>
                    <span className="text-xs text-slate-200 leading-snug">Drag empty space to pan. Scroll to zoom.</span>
                  </div>
                </div>

              </div>
            </div>
            <DragOverlay>
              {activeDragItem ? (
                activeDragItem.type === 'sidebar' ? (
                  <div className="p-3 bg-white shadow-xl rounded-xl border border-sky-500 opacity-90 w-32 flex flex-col items-center gap-1">
                    <span className="font-bold text-xs uppercase text-sky-700">{activeDragItem.id}</span>
                  </div>
                ) : (
                  <div className="bg-white p-4 shadow-2xl rounded-lg border border-sky-200 opacity-90 w-[400px]">
                    <RenderBlock block={activeDragItem.data} index={0} uneditable={true} />
                  </div>
                )
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      )}
    </div>
  );
}