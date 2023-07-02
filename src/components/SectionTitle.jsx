import useTheme from "../hooks/useTheme";

const SectionTitle = ({ title, heading }) => {
    const { darkTheme } = useTheme();
    const sectionClass = `text-center mt-16 mb-4 ${darkTheme && 'bg-indigo-950 text-white pb-2.5'}`;
    return (
        <div className={sectionClass}>
            <p className="text-lg font-serif text-green-500 font-bold">{title}</p>
            <h2 className="text-5xl font-light">{heading}</h2>
        </div>
    );
};

export default SectionTitle;