import { elevationStyle } from '../../src/theme/elevationStyle'

it('uses native elevation on Android', () => {
    expect(elevationStyle(3, '#000000', 'android')).toEqual({ elevation: 3 })
})

it('translates elevation into an iOS shadow', () => {
    expect(elevationStyle(3, '#000000', 'ios')).toEqual({
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.18,
        shadowRadius: 3,
    })
})

it('removes the iOS shadow at elevation zero', () => {
    expect(elevationStyle(0, '#000000', 'ios')).toEqual({ shadowOpacity: 0 })
})
