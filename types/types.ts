
// Login 
export interface LoginForm{
    email: string,
    password: string,
    rememberMe: boolean
}

export interface LoginResponse {
    access_token: string
    token_type: string
    expires: string | Date,
    account: {
        id: number,
        first_name: string
        last_name: string
        email: string
        password: string
        role: Roles
        department: Departments
        availability_status: AvailabilityStatus
        account_status: AccountStatus
        created_at: string | Date
        updated_at: string | Date
        phone: string
    }
}

export type Tabs = 'Pending' | 'Ongoing' | 'Completed';

export type Roles = 'staff' | 'admin' | 'guest';

export type Departments = 'energy_services'| 'learning_services' | 'innovation_services' | 'coroperate_finance' | 'coroperate_innovation' | 'human_resource' | 'business_locations' | 'technology_innovation' | 'marketing_communication';

export type AvailabilityStatus = 'available' | 'busy' | 'unavailable';

export type AccountStatus = 'active' | 'inactive';

// Create Meeting / checkin
export interface CheckinPayload {
    user_id: number
    fullname: string
    email: string
    phone: string
    reason: string
}

export interface CheckinResponse {
    id: number
    created_at: string | Date
    updated_at: string | Date
    user_id: number
    visitor_name: string
    visitor_email: string
    visitor_phone: string
    reason: string
    rejection_reason?: string | null
    check_out_time? : string | null
    status: MeetingStatus | 'pending'
}

export type MeetingStatus = 'pending' | 'rejected' | 'ongoing' | 'completed';

export interface HostDetails {
    id: number,
    name: string,
    department: string,
    availability: AvailabilityStatus
}

export interface HostSearchResult {
    id: number
    first_name: string | null
    last_name: string | null
    department: Departments
    availability_status: AvailabilityStatus
}