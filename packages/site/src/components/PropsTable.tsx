export default function PropsTable({ children }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Prop</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}


