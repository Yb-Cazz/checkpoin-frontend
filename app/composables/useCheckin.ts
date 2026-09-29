import { 
    type CheckinPayload,
    type CheckinResponse,
    type HostDetails,
    type HostSearchResult,
    type AvailabilityStatus
} from "~~/types/types"

export const useCheckin = () => {
    const api = useApi()

    const checkin = async (checkinPayload:CheckinPayload) => {
        const data:CheckinResponse = await api('/api/v1/meeting', {
            method: 'POST',
            body: checkinPayload
        })

        return data
    }

    return {
        checkin
    }
}


// Search staff by username
const formatDepartment = (department: string): string => {
    return department
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export const useHostSearch = () => {
    const api = useApi()

    const searchHosts = async (query: string, signal?: AbortSignal): Promise<HostDetails[]> => {
        const results: HostSearchResult[] = await api('/api/v1/staff', {
            method: 'GET',
            query: {search: query},
            signal,
        })

        return results.map((r) => ({
            id: r.id,
            name: `${r.first_name} ${r.last_name}`.trim(),
            department: formatDepartment(r.department),
            availability: r.availability_status,
        }))
    }

    return {
        searchHosts
    }
}