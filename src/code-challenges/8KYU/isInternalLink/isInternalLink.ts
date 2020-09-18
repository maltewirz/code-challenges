export const isInternalLink = (link: string) => 
    {
        return /^\/(?!\/)/.test(link)
    }
