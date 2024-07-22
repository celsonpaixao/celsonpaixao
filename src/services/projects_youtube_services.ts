// Define a interface para os dados dos vídeos
interface VideoData {
    title: string;
    description: string;
    thumbnailUrl: string;
    videoId: string
}

// Configurações da API
const apiKey = 'AIzaSyBQA0SS4ZvnXybbkQlz3QaFhV6sqVpZqdI';
const playlistId = 'PLF2nqnFI1TUg1A98yw0zYg3kMdhzhtJln';
const url = 'https://www.googleapis.com/youtube/v3/playlistItems';

async function fetchVideoData(): Promise<VideoData[]> {
    try {
        let nextPageToken: string = '';
        const videoData: VideoData[] = [];

        do {
            // Configura os parâmetros da solicitação
            const params = new URLSearchParams({
                part: 'snippet',
                playlistId: playlistId,
                key: apiKey,
                maxResults: '20',
                pageToken: nextPageToken // Adiciona o token da próxima página
            });

            // Faz a solicitação
            const response = await fetch(`${url}?${params}`);
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const data = await response.json();

            // Adiciona os dados dos vídeos ao array
            data.items.forEach((item: any) => { // Use `any` se o tipo exato não for conhecido
                const snippet = item.snippet;
                videoData.push({
                    title: snippet.title,
                    description: snippet.description,
                    thumbnailUrl: snippet.thumbnails.maxres.url,
                    videoId: snippet.resourceId.videoId
                });
            });

            // Atualiza o token da próxima página, se houver
            nextPageToken = data.nextPageToken || '';
        } while (nextPageToken); // Continua enquanto houver mais páginas

        return videoData; // Retorna o array com os dados dos vídeos

    } catch (error) {
        console.error('Erro ao buscar dados dos vídeos:', error);
        return []; // Retorna um array vazio em caso de erro
    }
}

export default fetchVideoData;
