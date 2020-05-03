export const isInternalLink = (link: string) => 
    {
        console.log('testing running')
        return /^\/(?!\/)/.test(link)
    }
