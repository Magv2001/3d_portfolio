import { counterItems } from "../constants";
import CountUpModule from "react-countup";
import { useLanguage } from "../i18n/useLanguage";

const CountUp = CountUpModule.default ?? CountUpModule;

const AnimatedCounter = () => {
    const { t } = useLanguage();

    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            <CountUp suffix={item.suffix} end={item.value} />
                        </div>
                        <div className="text-white-50 text-lg">{t(`counters.${item.id}`)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter
