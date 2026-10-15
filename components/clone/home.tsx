import { images, expertise, specialties } from "./content";
import { ScriptWord, TextLink, eyebrow, ovalLink, to } from "./ui";

const bodyText = "text-body leading-[1.8]";

export function ConejoMain() {
  return (
    <main>
      <section className="relative grid grid-cols-[34.65%_1fr] gap-[8.1%] overflow-hidden bg-paper pt-[50px] pb-[120px] max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-10 max-[768px]:pb-[65px]">
        <img
          className="h-[590px] w-full object-cover max-[768px]:h-[360px]"
          src={images.heroFamily}
          alt="A family enjoying time together on the beach"
          fetchPriority="high"
        />

        <div className="min-w-0 pr-[14%] max-[768px]:px-[8%]">
          <div
            className={`${eyebrow} mt-2.5 whitespace-pre-wrap max-[768px]:max-w-[310px]`}
          >
            Online & in-person counseling in Newbury <br /> Park & across CA
          </div>

          <h1 className="mt-[120px] mb-[25px] max-w-[600px] min-[1600px]:max-w-[700px] max-[1001px]:mt-[85px] max-[768px]:mt-10">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <ScriptWord>thrive</ScriptWord>.
          </h1>

          <p className="mb-11 text-body max-[768px]:mb-[25px]">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>

          <TextLink path="/">Book an Appointment</TextLink>
        </div>

        <img
          className="absolute top-[250px] -right-[13px] h-[335px] w-[175px] object-cover opacity-30 mix-blend-normal max-[1001px]:-right-[90px] max-[768px]:hidden"
          src={images.hopeOcean}
          alt="Gentle waves washing onto the shore"
        />
      </section>

      <section className="grid grid-cols-[1fr_31%] items-center gap-[10%] bg-paper pt-[115px] pb-[125px] pl-[8.8%] max-[768px]:grid-cols-1 max-[768px]:gap-[35px] max-[768px]:px-[8%] max-[768px]:pt-[50px] max-[768px]:pb-[70px]">
        <div>
          <h2 className="mb-10 max-w-[660px] max-[768px]:mb-[30px]">
            You’re holding onto hope that life can be better than it is right
            now.
          </h2>

          <div className="grid grid-cols-2 gap-[30px] max-[1001px]:gap-[22px] max-[768px]:grid-cols-1 max-[768px]:gap-0">
            <div>
              <p className={eyebrow}>
                At Conejo Valley Family Counseling we want to make that hope a
                reality.
              </p>

              <p className={bodyText}>
                Whether you're an adult seeking personal growth, looking to work
                through your trauma, a couple working on your relationship, or a
                parent looking for support for your child, we provide a
                compassionate and safe space to help you navigate all of life’s
                ups and downs.
              </p>
            </div>

            <p className={bodyText}>
              First and foremost, we believe what you’re going through is real,
              valid, and worthy of support. Our team offers clients in the
              Newbury Park area and across CA an environment to discover a new
              life and a deeper sense of self in the midst of their struggles.
              As we tap into the power of connection and understanding, you can
              find your footing again and take a transformative path forward.
            </p>
          </div>
        </div>

        <img
          className="h-full w-full object-cover max-[768px]:h-[320px]"
          src={images.hopeOcean}
          alt="Sandy beach and gentle ocean waves"
          loading="lazy"
        />
      </section>

      <section className="px-[5.8%] pt-[105px] pb-[100px] max-[768px]:px-[8%] max-[768px]:py-[65px]">
        <h2>
          Who we <ScriptWord>help</ScriptWord>
        </h2>

        <div className="mx-auto mt-13.75 grid max-w-267.5 grid-cols-3 gap-5.5 max-[768px]:mt-10 max-[768px]:grid-cols-1 max-[768px]:gap-[35px]">
          {[
            {
              title: "Adults",
              image: images.adults,
              path: "/",
              text: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
            },
            {
              title: "Couples",
              image: images.couples,
              path: "/",
              text: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
            },
            {
              title: "Children & Teens",
              image: images.children,
              path: "/",
              text: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
            },
          ].map((person) => (
            <article key={person.title}>
              <a href={to(person.path)}>
                <img
                  className="h-[390px] w-full object-cover max-[1001px]:h-[310px] max-[768px]:h-[420px]"
                  src={person.image}
                  alt={
                    person.title === "Adults"
                      ? "Two women sitting together by the ocean"
                      : person.title === "Couples"
                        ? "A couple embracing on the beach"
                        : "Children playing together on the beach"
                  }
                  loading="lazy"
                />
              </a>

              <h4 className="mt-7 mb-[18px] max-[768px]:mt-5">
                <a href={to(person.path)}>{person.title}</a>
              </h4>

              <p className={bodyText}>{person.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative flex h-[650px] items-end px-[9%] pt-[99px] pb-[90px] after:absolute after:inset-0 after:bg-[oklch(0.2_0_0/0.4)] max-[768px]:h-auto max-[768px]:min-h-[390px] max-[768px]:px-[8%] max-[768px]:py-[70px]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={images.quoteBeach}
          alt="Children running along the beach"
          loading="lazy"
        />

        <h2 className="relative z-[1] max-w-[930px] text-h2 text-background">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <em>Nothing will be too heavy for us to carry together.</em>
        </h2>
      </section>

      <section className="grid grid-cols-[0.85fr_1fr_1fr] gap-[65px] px-[8.8%] pt-[115px] pb-[140px] max-[1001px]:gap-10 max-[768px]:grid-cols-2 max-[768px]:gap-5 max-[768px]:px-[8%] max-[768px]:py-[65px]">
        <h3 className="max-[768px]:col-span-full max-[768px]:mb-[15px]">
          Our areas of
          <br />
          <ScriptWord>expertise</ScriptWord>
        </h3>

        {[expertise.slice(0, 6), expertise.slice(6)].map((list, i) => (
          <div key={i}>
            {list.map(([label, path]) => (
              <a
                key={label}
                href={to(path)}
                className="block border-b py-4 text-eyebrow font-normal tracking-[0.12em] uppercase last:[border:0] max-[768px]:text-button max-[768px]:wrap-anywhere"
              >
                {label}
              </a>
            ))}
          </div>
        ))}
      </section>

      <section
        className="grid grid-cols-[1fr_27%] gap-[10%] bg-sand py-[110px] pl-[8.8%] max-[768px]:grid-cols-1 max-[768px]:gap-10 max-[768px]:px-[8%] max-[768px]:py-[65px]"
        id="how-we-work"
      >
        <div>
          <div className={eyebrow}>How we work</div>
          <h2 className="mt-[90px] mb-10 max-[768px]:mt-10 max-[768px]:mb-[30px]">
            We’re here to make a difference.
          </h2>

          <div className="grid grid-cols-2 gap-[30px] max-[1001px]:gap-[22px] max-[768px]:grid-cols-1 max-[768px]:gap-0">
            <div>
              <p className={eyebrow}>
                The clients we work with are balancing so many things at once,
                it’s often hard for them to put themselves first.
              </p>

              <p className={bodyText}>
                Here, your needs are always top priority. Our team takes the
                time to deeply listen to our clients in order to truly
                understand their story and their struggles. We recognize that no
                two people are the same and that personalized therapy means an
                intentional, tailored approach. (You won’t find anything
                “one-size-fits-all” here.) If you’re ready to do the work, we’re
                ready to help.
              </p>
            </div>

            <p className={bodyText}>
              Sometimes we may gently challenge you to look at things
              differently and other times we may explore your emotions, all
              while encouraging you to practice what you’ve learned in your
              daily life. We take what we do seriously because we know how
              important it is for you to heal from what’s hurting you, discover
              a fulfilling life, and build meaningful relationships. Our goal is
              to walk alongside you in this journey, offering support and
              guidance as you uncover your strengths and embrace what the future
              can hold for you.
            </p>
          </div>

          <TextLink path="/" className="mt-8">
            Learn more about us
          </TextLink>
        </div>

        <img
          className="h-[625px] w-full self-center object-cover max-[768px]:h-[430px]"
          src={images.motherChild}
          alt="A mother and daughter dancing on the beach"
          loading="lazy"
        />
      </section>

      <section className="grid grid-cols-[54%_1fr] [align-items:end] gap-[5%] py-[95px] pr-[7%] max-[768px]:grid-cols-1 max-[768px]:gap-[35px] max-[768px]:px-[8%] max-[768px]:py-[60px]">
        <img
          className="h-[490px] w-full object-cover max-[768px]:h-[330px]"
          src={images.familyOcean}
          alt="A family of four looking out at the ocean"
          loading="lazy"
        />

        <h2 className="pb-[5px] text-h2">
          Honoring where you’ve <br /> been <ScriptWord>&</ScriptWord> helping
          shape <br /> where you’re headed.
        </h2>
      </section>

      <section
        className="grid grid-cols-[0.65fr_1.6fr] gap-[90px] px-[8.8%] pt-[90px] pb-[145px] max-[1001px]:gap-[45px] max-[768px]:grid-cols-1 max-[768px]:gap-[45px] max-[768px]:px-[8%] max-[768px]:pt-[45px] max-[768px]:pb-[70px]"
        id="specialties"
      >
        <h3>
          Our <ScriptWord>specialties</ScriptWord>
          <br />
          include…
        </h3>

        <div className="grid grid-cols-2 gap-[70px_65px] max-[768px]:grid-cols-1 max-[768px]:gap-10">
          {specialties.map((s) => (
            <article key={s.title}>
              <h4 className="mb-5">{s.title}</h4>
              <p className={bodyText}>{s.text}</p>
              <TextLink path={s.path}>Learn more</TextLink>
            </article>
          ))}
        </div>
      </section>

      <section className="grid min-h-[670px] grid-cols-[12%_40%_35%] items-center justify-between overflow-hidden bg-paper py-[90px] max-[768px]:grid-cols-1 max-[768px]:gap-10 max-[768px]:px-[8%] max-[768px]:py-[65px]">
        <img
          className="h-[330px] w-full object-cover [transform:translateX(-25%)] max-[768px]:hidden"
          src={images.shellsLeft}
          alt="Collecting seashells on the beach"
          loading="lazy"
        />

        <div>
          <div className={eyebrow}>Schedule an appointment</div>

          <h2 className="mt-[85px] mb-7 max-[768px]:mt-10">
            Find a therapist who is the right fit for{" "}
            <ScriptWord>you</ScriptWord>.
          </h2>

          <p className={bodyText}>
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand that
            your journey is personal, and we're here to support you with care
            and understanding every step of the way. Each member of our team
            brings dedicated expertise and a commitment to support you in your
            struggles. We want you to feel prioritized, understood, and
            empowered.
          </p>

          <p className={bodyText}>
            Click the button below to schedule an appointment.
          </p>

          <a className={`${ovalLink} mt-2.5`} href={to("/")}>
            Book now
          </a>
        </div>

        <img
          className="h-full w-full object-cover max-[768px]:h-[380px]"
          src={images.shellsRight}
          alt="A parent and child discovering shells in the sand"
          loading="lazy"
        />
      </section>
    </main>
  );
}
