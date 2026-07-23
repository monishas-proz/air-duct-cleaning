"use client";

import Button from "./Button";
import Reveal from "./Reveal";

export default function CTAComponent({
  title,
  description,
  buttons = [],
  backgroundClassName = "",
  contentClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  layout = "center",
}) {
  return (
    <section className="section">
      <div className="container">

        <Reveal animation="up">
          <div
            className={`
              rounded-xl
              px-6 py-12
              md:px-10 md:py-14
              lg:px-14 lg:py-16
              ${backgroundClassName}
            `}
          >
            {layout === "center" ? (
              <>
                <h2
                  className={`
                    heading-1
                    text-center
                    ${titleClassName}
                  `}
                >
                  {title}
                </h2>

                <p
                  className={`
                    body-lg
                    mx-auto
                    mt-6
                    max-w-2xl
                    text-center
                    ${descriptionClassName}
                  `}
                >
                  {description}
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  {buttons.map((button, index) => (
                    <Reveal
                      key={button.text}
                      animation="up"
                      delay={index * 150}
                    >
                      <Button
                        href={button.href}
                        variant={button.variant}
                        className={button.className}
                      >
                        {button.text}
                      </Button>
                    </Reveal>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                <div className={`max-w-[520px] ${contentClassName}`}>
                  <h2
                    className={`
                      heading-2
                      text-white
                      ${titleClassName}
                    `}
                  >
                    {title}
                  </h2>

                  <p
                    className={`
                      body-lg
                      mt-5
                      text-white/75
                      ${descriptionClassName}
                    `}
                  >
                    {description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  {buttons.map((button, index) => (
                    <Reveal
                      key={button.text}
                      animation="up"
                      delay={index * 150}
                    >
                      <Button
                        href={button.href}
                        variant={button.variant}
                        className={button.className}
                      >
                        {button.text}
                      </Button>
                    </Reveal>
                  ))}
                </div>

              </div>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}