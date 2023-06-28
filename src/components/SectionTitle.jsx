const SectionTitle = ({ title, heading }) => {
    return (
        <div className="text-center mt-16 mb-4">
            <p className="text-lg font-serif text-green-500 font-bold">{title}</p>
            <h2 className="text-5xl font-light">{heading}</h2>
        </div>
    );
};

export default SectionTitle;