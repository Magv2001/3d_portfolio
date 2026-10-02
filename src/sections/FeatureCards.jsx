import { abilities } from "../constants"
import { useLanguage } from "../i18n/useLanguage"

const FeatureCards = () => {
    const { t } = useLanguage();

    return (
        <div className="w-full padding-x-lg">
            <div className="mx-auto grid-3-cols">
                {abilities.map(({ id, imgPath }) => (
                    <div key={id} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={imgPath} alt={t(`abilities.${id}.title`)} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{t(`abilities.${id}.title`)}</h3>
                        <p className="text-white-50 text-lg">{t(`abilities.${id}.desc`)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureCards
