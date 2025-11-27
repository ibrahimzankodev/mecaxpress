const OrderSkeleton = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border dark:bg-secondary animate-pulse">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-24 mb-2"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
                </div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
            </div>
            <div className="border-t pt-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-2"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                </div>
            </div>
        </div>
    )
}

export default OrderSkeleton
