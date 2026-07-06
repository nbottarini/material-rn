export default function Figure({ src, alt, caption }) {
    return (
        <figure>
            <img src={src} alt={alt}/>
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

interface Props {
    src: string
    alt?: string
    caption?: string
}
