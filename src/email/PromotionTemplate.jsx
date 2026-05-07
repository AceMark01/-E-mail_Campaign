import React, { useState } from "react";
import {
  HeroSaaS,
  QuadRetail,
  ZPattern,
  TrioFeature,
  ModernBlog,
  FlashSale,
  TrustPilot,
  PricingTable,
  MinimalText,
  AppDownload,
  SimpleCard,
  WelcomeEmail,
  ProductLaunch,
  EventInvite,
  NewsletterModern,
  OrderConfirmation,
  FeedbackRequest,
  ResetPassword,
  BlackFridaySale,
  CyberMonday,
  ChristmasOffer,
  NewYearGreeting,
  HalloweenParty,
  ValentineSpecial,
  EasterSale,
  SummerVibes,
  WinterCollection,
  SpringClearance,
  AutumnArrivals,
  DiwaliFestival,
  ThanksgivingDinner,
  MotherDay,
  FatherDay,
  WebinarInvite,
  ConferencePass,
  WorkshopRegistration,
  ProductUpdate,
  WeeklyDigest,
  MonthlyRoundup,
  YearInReview,
  AbandonedCart,
  OrderShipped,
  DeliverySuccess,
  ReviewRequest,
  ReferAFriend,
  LoyaltyProgram,
  BirthdayWishes,
  AnniversaryCelebration,
  FlashDiscount,
  VIPAccess
} from "./templates";
import { DndContext, closestCenter, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { RenderBlock } from "./blocks/RenderBlock";
import { SortableBlockWrapper } from "./blocks/SortableBlockWrapper";
import { StandardFooter } from "./elements/Shared";

// Using a lookup object for cleaner mapping
const TEMPLATE_MAP = {
  "HERO_SaaS": HeroSaaS,
  "QUAD_RETAIL": QuadRetail,
  "Z_PATTERN": ZPattern,
  "TRIO_FEATURE": TrioFeature,
  "MODERN_BLOG": ModernBlog,
  "FLASH_SALE": FlashSale,
  "TRUST_PILOT": TrustPilot,
  "PRICING_TABLE": PricingTable,
  "MINIMAL_TEXT": MinimalText,
  "APP_DOWNLOAD": AppDownload,
  "SimpleCard": SimpleCard,
  "WelcomeEmail": WelcomeEmail,
  "ProductLaunch": ProductLaunch,
  "EventInvite": EventInvite,
  "NewsletterModern": NewsletterModern,
  "OrderConfirmation": OrderConfirmation,
  "FeedbackRequest": FeedbackRequest,
  "ResetPassword": ResetPassword,
  "BlackFridaySale": BlackFridaySale,
  "CyberMonday": CyberMonday,
  "ChristmasOffer": ChristmasOffer,
  "NewYearGreeting": NewYearGreeting,
  "HalloweenParty": HalloweenParty,
  "ValentineSpecial": ValentineSpecial,
  "EasterSale": EasterSale,
  "SummerVibes": SummerVibes,
  "WinterCollection": WinterCollection,
  "SpringClearance": SpringClearance,
  "AutumnArrivals": AutumnArrivals,
  "DiwaliFestival": DiwaliFestival,
  "ThanksgivingDinner": ThanksgivingDinner,
  "MotherDay": MotherDay,
  "FatherDay": FatherDay,
  "WebinarInvite": WebinarInvite,
  "ConferencePass": ConferencePass,
  "WorkshopRegistration": WorkshopRegistration,
  "ProductUpdate": ProductUpdate,
  "WeeklyDigest": WeeklyDigest,
  "MonthlyRoundup": MonthlyRoundup,
  "YearInReview": YearInReview,
  "AbandonedCart": AbandonedCart,
  "OrderShipped": OrderShipped,
  "DeliverySuccess": DeliverySuccess,
  "ReviewRequest": ReviewRequest,
  "ReferAFriend": ReferAFriend,
  "LoyaltyProgram": LoyaltyProgram,
  "BirthdayWishes": BirthdayWishes,
  "AnniversaryCelebration": AnniversaryCelebration,
  "FlashDiscount": FlashDiscount,
  "VIPAccess": VIPAccess
};

export const PromotionTemplate = ({ layoutType, data = {}, onUpdate, onImageClick, onBlockUpdate, onBlockImageClick, uneditable }) => {
  const SelectedTemplate = TEMPLATE_MAP[layoutType] || SimpleCard;
  const blocks = data.blocks || [];

  return (
    <div className="w-full relative">
      <SelectedTemplate
        data={data}
        onUpdate={onUpdate}
        onImageClick={onImageClick}
        uneditable={uneditable}
      />

      {/* --- DYNAMIC BLOCKS --- */}
      {blocks.length > 0 && (
        <div className="mt-8 flex flex-col w-full relative">
          {!uneditable ? (
            <SortableContext
              items={blocks.map(b => b.id)}
              strategy={verticalListSortingStrategy}
            >
              {blocks.map((block, index) => (
                <SortableBlockWrapper key={block.id || index} id={block.id} uneditable={uneditable}>
                  <RenderBlock
                    index={index}
                    block={block}
                    onUpdate={onBlockUpdate}
                    onImageClick={onBlockImageClick}
                    uneditable={uneditable}
                  />
                </SortableBlockWrapper>
              ))}
            </SortableContext>
          ) : (
            blocks.map((block, index) => (
              <RenderBlock
                key={block.id || index}
                index={index}
                block={block}
                onUpdate={onBlockUpdate}
                uneditable={uneditable}
              />
            ))
          )}
        </div>
      )}

      {/* --- CENTRALIZED FOOTER --- */}
      <div className="mt-8">
        <StandardFooter uneditable={uneditable} />
      </div>
    </div>
  );
};
