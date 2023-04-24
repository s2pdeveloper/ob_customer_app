
export const OPTIONS = {
    emailPattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    imageType: 'Please upload the file in jpeg, png format',
    documentType: 'Please upload the file in jpeg, png and pdf format',
    sizeLimit: 'Please upload the file that is less then 8mb',
    maxLimit: 8,
    noInternet: "Please check your internet connection and try again!"
};

export const confirmMessages = {
    deleteTitle: 'Delete ',
    deleteDescription: 'Are you sure you want to delete',
    hideTitle: 'Request',
    hideDescription: 'Are you sure you want to ',
    stockTitle: 'Stock request',
    stockDescription: 'Are you sure you want to make this product ',
    updateTitle: 'Update ',
    updateDescription: 'Are you sure you want to update',
}

export const monthsName = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]
/**
 * Payment status
 */
export const bookingStatus = {
    PENDING: 'pending',
    DELIVERED: 'delivered',
    NEW: 'new',
    REJECTED: 'rejected',
};
export const defaultStatus = {
    ACTIVE: "active",
    CLOSED: "closed",
    INACTIVE: "inactive",
    UNAPPROVED: "unapproved",
    APPROVED: "approved",
    PENDING: "pending",
    ACCEPTED: "accepted",
    REJECTED: "rejected",
    CANCELLED: "cancelled",
    DELETED: "deleted",
    EXPIRED: "expired",
};
export const deliveryStatus = {
    PENDING: "pending",
    READY: "ready",
    DISPATCHED: "dispatched",
    DELIVERED: "delivered",
    COMPLETE: "completed",
    REJECTED: "rejected",
};
export const paymentStatus = {
    PAID: 'paid',
    PENDING: 'pending'
};
export const messageCategory = {
    NORMAL: 'normal',
    MEDIA: 'media',
    LOCATION: 'location'
};
export const addressType = {
    Home: 'home',
    Work: 'work'
};

export const ROLES = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    ADMIN: 'ADMIN',
    SHOP_KEEPER: 'SHOP_KEEPER',
    SUPPLIER: 'SUPPLIER',
    CUSTOMER: 'CUSTOMER',
    EMPLOYEE: 'EMPLOYEE'
}
export const BUSINESS_TYPE = {
    PRODUCT: 'product',
    SERVICES: 'services',
    PRODUCT_AND_SERVICES: 'product and services',
    RESALE: 'resale',
}
export const getAllRolesArray = () => {
    return [
        ROLES.SUPER_ADMIN,
        ROLES.ADMIN,
        ROLES.SHOP_KEEPER,
        ROLES.SUPPLIER,
        ROLES.CUSTOMER,
        ROLES.EMPLOYEE
    ]
};
export const socketOnEvents = {
    AUTHENTICATE: 'authenticate',
    CREATE_ORDER: 'createOrder',
    SEND_MESSAGE: 'sendMessage',
    DELETE_MESSAGE: 'deleteMessage',
    LIST_MESSAGE: 'listMessages',
    LIST_ORDER: 'listOrder',
};

export const socketEmitEvents = {
    RECEIVE_ORDER: 'receiveOrder',
    RECEIVE_MESSAGE: 'receiveMessage',
    ERROR_MESSAGE: 'errorMessage',
};

export const notificationType = {
    ORDER: "order",
    PRODUCT_REQUEST: "product_request",
    CHAT_MESSAGE: `chat_message`,
};