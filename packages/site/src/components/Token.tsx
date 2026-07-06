import { ReactNode } from 'react'

export default function Token({ name, value }) {
    const isColor = value.startsWith('#');
    let resolvedValue: ReactNode = value
    if (value.startsWith('ds.ref')) {
        resolvedValue = <a href={'/gmds/reference-tokens#' + value}>{value}</a>;
    } else if (value.startsWith('ds.sys.typeScale')) {
        resolvedValue = <a href={'/gmds/system-tokens#' + value + '.fontFamily'}>{value}</a>;
    } else if (value.startsWith('ds.sys')) {
        resolvedValue = <a href={'/gmds/system-tokens#' + value}>{value}</a>;
    }

    return (
        <tr id={name}>
            <td style={{ width: '50%', fontSize: '90%' }}>
                {name}
            </td>
            <td style={{ width: '50%', fontSize: '90%' }}>
                {isColor && (
                    <div
                        style={{
                            border: '1px solid #cccccc',
                            backgroundColor: value,
                            width: '30px',
                            height: '20px',
                            display: 'inline-block',
                            position: 'relative',
                            top: '4px',
                            marginRight: '10px',
                        }}
                    ></div>
                )}
                {resolvedValue}
            </td>
        </tr>
    )
}

interface TokenProps {
    name: string
    value: string
}
