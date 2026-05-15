import Image from "next/image";

const HeroAwards = () => {
    return(
        <section className="py-10 bg-black">
            <div className="mx-25 py-2">
                <div className="flex gap-20 items-center justify-between px-5">
                    <div><Image src="https://nexait.io/assets/images/bagge/iso-lg.svg" alt="hero-award" width="62" height="62"/></div>
                    <div><Image src="https://nexait.io/assets/images/bagge/NASSCOM_lg.svg" alt="hero-award" width="159" height="25"/></div>
                    <div><Image src="https://nexait.io/assets/images/bagge/clutch-lg.svg" alt="hero-award" width="123" height="35"/></div>
                    <div><Image src="https://nexait.io/assets/images/bagge/goodfirms-lg.svg" alt="hero-award" width="166" height="25"/></div>
                    <div><Image src="https://nexait.io/assets/images/bagge/trustpilot-lg.svg" alt="hero-award" width="73" height="35"/></div>
                    <div><Image src="https://nexait.io/assets/images/bagge/gdpr-lg.svg" alt="hero-award" width="62" height="62"/></div>
                </div>
            </div>
        </section>
    )
}

export default HeroAwards;