import { images, team } from "./content";
import { to } from "./ui";

const text = "text-small leading-[1.8] wrap-anywhere";
const heading = "mb-[23px] text-small font-normal tracking-[0.12em] uppercase";

export function SiteFooter() {
  return (
    <footer>
      <div className="grid grid-cols-[1.6fr_0.7fr_1fr_1fr] gap-[65px] px-[6%] pt-[85px] pb-[65px] max-[1001px]:gap-[30px] max-[768px]:grid-cols-2 max-[768px]:gap-[35px_25px] max-[768px]:px-[8%] max-[768px]:py-[60px]">
        <div className="max-[768px]:col-span-full">
          <a href={to("/")} className={text}>
            <img
              className="mb-[30px] h-[75px] w-[260px] max-[768px]:w-[220px]"
              src={images.logo}
              alt="Conejo Valley Family Counseling"
              loading="lazy"
            />
          </a>

          <p className={text}>
            We want to make getting started simple. You’re welcome to come into
            our office in Newbury Park or schedule virtual appointments from
            anywhere in CA—whatever works best for you.
          </p>
        </div>

        <div>
          <h5 className={heading}>Navigate</h5>
          <div className="flex flex-col gap-2">
            <a href={to("/")} className={text}>
              Home
            </a>
            <a href={to("/")} className={text}>
              About
            </a>
            <a href={to("/")} className={text}>
              FAQs
            </a>
            <a href={to("/")} className={text}>
              Contact
            </a>
          </div>
        </div>

        <div>
          <h5 className={heading}>Contact</h5>
          <p className={text}>
            925 Broadbeck Dr
            <br />
            Suites 200 and 225
            <br />
            Newbury Park, CA 91320
          </p>

          <p className={text}>
            <a href="mailto:info@conejovalleycounseling.com" className={text}>
              info@conejovalleycounseling.com
            </a>
            <br />
            <a href="tel:8052423120" className={text}>
              805.242.3120
            </a>
          </p>

          <p className={text}>
            Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi
            Valley
          </p>
        </div>

        <div>
          <h5 className={heading}>Our Team</h5>
          <div className="flex flex-col gap-2">
            {team.map((name) => (
              <a key={name} href={to("/")} className={text}>
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-sea px-[6%] py-4 text-[15px] tracking-[0.6px] text-background max-[768px]:px-[8%] max-[768px]:leading-[1.8]">
        <a href={to("/")}>Terms</a> | <a href={to("/")}>Privacy Policy</a> |{" "}
        <a href={to("/")}>Disclaimer</a> | Website by Walker Strategy Co.
      </div>
    </footer>
  );
}
