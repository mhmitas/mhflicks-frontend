
function LoadingSkeletonPost() {
    return (
        <div className='p-4 md:p-5 bg-base-100 border-base-300 border rounded-lg space-y-3 md:space-y-4'>
            <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2'>
                    <div className='size-9 sm:size-11 rounded-full bg-base-300 skeleton'></div>
                    <div className='leading-5 space-y-2'>
                        <div className='h-4 bg-base-300 rounded w-32 skeleton'></div>
                        <div className='flex flex-wrap gap-1'>
                            <div className='h-3 bg-base-300 rounded w-20 skeleton'></div>
                            <div className='h-3 bg-base-300 rounded w-24 skeleton'></div>
                        </div>
                    </div>
                </div>
                <div className='h-8 w-20 bg-base-300 rounded-full skeleton'></div>
            </div>
            <div className='space-y-2'>
                <div className='h-5 bg-base-300 rounded w-full skeleton'></div>
                <div className='h-4 bg-base-300 rounded w-5/6 skeleton'></div>
                <div className='h-4 bg-base-300 rounded w-4/6 skeleton'></div>
            </div>
            <div className='relative w-full'>
                <div className='h-48 bg-base-300 rounded-md skeleton'></div>
            </div>
            <div className='flex items-center justify-end gap-3'>
                <div className='h-8 w-8 bg-base-300 rounded-full skeleton'></div>
                <div className='h-8 w-8 bg-base-300 rounded-full skeleton'></div>
                <div className='h-8 w-8 bg-base-300 rounded-full skeleton'></div>
            </div>
        </div>

    )
}


export default LoadingSkeletonPost