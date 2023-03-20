import { ApiClient } from "./axios"

const api = new ApiClient()

export interface NotionApiConfig {
    apiKey: string
    notionVersion: string
    databaseId: string
    query?: {
        property: string
        value: {
            title: Array<{
                text: {
                    content: string
                }
            }>
        }
    }
}


export async function getNotionData(config: NotionApiConfig) {
    const response = await api.post(
        /* 请将其域名代理 VITE_NOTION_LINK=https://api.notion.com/v1 */
        `${import.meta.env.VITE_NOTION_LINK}/databases/${config.databaseId}/query`,
        {
            query: config.query,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Notion-Version': config.notionVersion,
                Authorization: `Bearer ${config.apiKey}`,
            },
        }
    )
    return response.data
}