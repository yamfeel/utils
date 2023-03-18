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
        // `https://api.notion.com/v1/databases/${config.databaseId}/query`,
        /* 在设置中配置跨域 */
        `v1/databases/${config.databaseId}/query`,
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