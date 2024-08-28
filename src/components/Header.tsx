import '../beauty.css'
export const Header = () => {
    return (
        <div className='flex h-[5%] bg-slate-600 text-white justify-between px-10 items-center'>
            <div className='text-[3rem] font-extrabold'>
                <p>Tasks manager</p>
            </div>
            <div>
                <ul className='flex flex-row gap-5'>
                    <li>All tasks</li>
                    <li>Achieved tasks</li>
                    <li>Unahchieved tasks</li>
                    <li>New task</li>
                </ul>
            </div>
        </div>
    )
}