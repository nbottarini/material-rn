import React, { FC } from 'react'
import { NavigationProps } from '../../navigation/NavigationProps'
import { View } from 'react-native'
import { rv, UploadField } from '@material-rn/core'

export const UploadFieldScreen: FC<NavigationProps> = (props) => {
    return (
        <View style={{ flexGrow: 1, padding: rv(24) }}>
            <UploadField
                label="Imagen de respaldo a su consulta (Opcional)"
                placeholder="Toca para cargar un archivo"
                value={''}
                isUploading={false}
                onUploadPress={() => console.log('upload')}
            />
            <UploadField
                label="Imagen de respaldo a su consulta (Opcional)"
                placeholder="Toca para cargar un archivo"
                value={'archivo.png'}
                isUploading={true}
                onUploadPress={() => console.log('upload')}
                uploadText={'subiendo 22%'}
                supportingText="Formato permitido: png, pdf. 1 MB máximo"
            />
            <UploadField
                label="Imagen de respaldo a su consulta (Opcional)"
                placeholder="Toca para cargar un archivo"
                value={'archivo.png'}
                isUploading={false}
                onUploadPress={() => console.log('upload')}
                uploadText="Archivo subido con éxito"
            />
            <UploadField
                label="Imagen de respaldo a su consulta (Opcional)"
                placeholder="Toca para cargar un archivo"
                value={''}
                isUploading={false}
                onUploadPress={() => console.log('upload')}
                errorText={'some error'}
            />
        </View>
    )
}
