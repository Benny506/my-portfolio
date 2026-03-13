import CustomScroll from "../../scroll/CustomScroll";

export default function CVNav({ sections, onSelect }) {
    return (
        <div style={{ minHeight: "80vh" }}>
            <CustomScroll>
                <div style={{ minHeight: "80vh" }} className="h-100 border-right-light-1E2D3D">
                    {sections.map((s) => (
                        <div key={s.id} onClick={() => onSelect(s.id)} className="pointer border-bottom-light-1E2D3D p-3">
                            <p className="m-0 p-0 regular-txt txt-607B96">{s.title}</p>
                        </div>
                    ))}
                </div>
            </CustomScroll>
        </div>
    )
}
