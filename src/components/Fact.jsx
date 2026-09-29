export default function Fact({ label, value }) {
    return (
        <div className="mb-2">
            <dt className="text-black font-normal text-sm">{label}</dt>
            <dd className="text-black font-normal pl-4">{value}</dd>
        </div>
    );
}