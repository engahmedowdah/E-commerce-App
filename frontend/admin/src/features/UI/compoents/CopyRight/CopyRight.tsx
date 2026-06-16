import "./CopyRight.css";
import useTranslation from "../../../../shared/i18n/useTranslation";
function CopyRight() {
    const t = useTranslation();
    return (
        <small>
            <p>{t.footer.copyright(new Date().getFullYear())}</p>
        </small>
    )
}
export default CopyRight;
