export default function Prop({ name, type, isOptional }) {
    return (
        <tr id={name}>
            <td style={{ width: '50%', fontSize: '90%' }}>
                {name}{isOptional ? <span style={{ fontStyle: 'italic' }}> (optional)</span> : ''}
            </td>
            <td style={{ width: '50%', fontSize: '90%' }}>
                {type}
            </td>
        </tr>
    )
}

interface Props {
    name: string
    type: string
    isOptional?: boolean
}
