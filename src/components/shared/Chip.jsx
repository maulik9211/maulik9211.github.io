
export default function Chip({ icon, label }) {
    return (
        <div className='badge badge-ghost h-8 gap-1 p-3'>
            {icon}
            {label}
        </div>
    )
}
