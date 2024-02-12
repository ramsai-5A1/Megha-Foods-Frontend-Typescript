import { BULK_ORDERS_BACKGROUND_IMAGE_URL } from "../helper/constants"

const EventBulkOrders = () => {
    return (
        <div>
            <BulkOrderFirstComponent/>
        </div>
    )
}

const BulkOrderFirstComponent = () => {
    return (
        <div 
            className="bg-cover bg-center h-screen w-full"
            style={{
                backgroundImage: `url(${BULK_ORDERS_BACKGROUND_IMAGE_URL})`,
            }}
            >

        </div>
    )
}

export default EventBulkOrders