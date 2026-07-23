"use client";

import Image from "next/image";

import Button from "./Button";
import FeatureList from "./FeatureList";
import Reveal from "./Reveal";

export default function ContentSplitSection({
  image,
  imageAlt,
  imagePosition = "left",

  badge,
  icon,

  title,
  description,

  features = [],
  featureIcon,

  button,

  children,

  imageClassName = "",
  contentClassName = "",

  titleClassName = "",
  descriptionClassName = "",

  iconClassName = "",
}) {
  const ImageContent = (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-md

        transition-all
        duration-500

        hover:-translate-y-1
        hover:shadow-xl

        ${imageClassName}
      `}
    >
      <Image
        src={image}
        alt={imageAlt}
        className="
          h-auto
          w-full
          object-cover

          transition-transform
          duration-500
          ease-out

          group-hover:scale-[1.02]
        "
      />

      {/* Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-black/0

          transition-colors
          duration-500

          group-hover:bg-black/10
        "
      />

      {badge && (
        <span
          className="
            caption
            absolute
            left-5
            top-5
            z-10

            rounded
            bg-primary-700

            px-4
            py-1

            font-semibold
            uppercase
            tracking-[0.14em]
            text-white
          "
        >
          {badge}
        </span>
      )}
    </div>
  );

  const TextContent = (
    <div className={contentClassName}>

      {icon && (
        <Image
          src={icon}
          alt=""
          width={38}
          height={38}
          className={iconClassName}
        />
      )}

      <h2
        className={`
          heading-1
          ${icon ? "mt-4" : ""}
          ${icon ? "text-neutral-900" : "text-primary-700"}
          ${titleClassName}
        `}
      >
        {title}
      </h2>

      <p
        className={`
          body-lg
          mt-6
          text-neutral-600
          ${descriptionClassName}
        `}
      >
        {description}
      </p>

      {features.length > 0 && (
        <FeatureList
          className="mt-8"
          items={features}
          icon={featureIcon}
        />
      )}

      {children}

      {button && (
        <div className="mt-10">
          <Button
            href={button.href}
            variant={button.variant}
            className={button.className}
            icon={button.icon}
            iconPosition={button.iconPosition}
            onClick={button.onClick}
          >
            {button.text}
          </Button>
        </div>
      )}

    </div>
  );

  return (
    <section className="section section-light">
      <div className="container">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">

          {imagePosition === "left" ? (
            <>
              <Reveal animation="left">
                {ImageContent}
              </Reveal>

              <Reveal
                animation="right"
                delay={200}
              >
                {TextContent}
              </Reveal>
            </>
          ) : (
            <>
              <Reveal animation="left">
                {TextContent}
              </Reveal>

              <Reveal
                animation="right"
                delay={200}
              >
                {ImageContent}
              </Reveal>
            </>
          )}

        </div>

      </div>
    </section>
  );
}