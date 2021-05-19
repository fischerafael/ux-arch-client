export interface IEvaluationOptions {
    id: string
    emoji: string
    title: string
    value: number
}

const fraction = 1 / 15

export const evaluationOptions: IEvaluationOptions[] = [
    {
        id: '0',
        emoji: '',
        title: '#tenso',
        value: 0 * fraction
    },
    {
        id: '4',
        emoji: '',
        title: '#triste',
        value: 4 * fraction
    },
    {
        id: '8',
        emoji: '',
        title: '#contente',
        value: 8 * fraction
    },
    {
        id: '12',
        emoji: '',
        title: '#alerta',
        value: 12 * fraction
    },
    {
        id: '1',
        emoji: '',
        title: '#nervoso',
        value: 1 * fraction
    },
    {
        id: '5',
        emoji: '',
        title: '#deprimido',
        value: 5 * fraction
    },
    {
        id: '9',
        emoji: '',
        title: '#sereno',
        value: 9 * fraction
    },
    {
        id: '13',
        emoji: '',
        title: '#excitado',
        value: 13 * fraction
    },
    {
        id: '2',
        emoji: '',
        title: '#estressado',
        value: 2 * fraction
    },
    {
        id: '6',
        emoji: '',
        title: '#letárgico',
        value: 6 * fraction
    },
    {
        id: '10',
        emoji: '',
        title: '#relaxado',
        value: 10 * fraction
    },
    {
        id: '14',
        emoji: '',
        title: '#eufórico',
        value: 14 * fraction
    },
    {
        id: '3',
        emoji: '',
        title: '#chateado',
        value: 3 * fraction
    },
    {
        id: '7',
        emoji: '',
        title: '#fatigado',
        value: 7 * fraction
    },
    {
        id: '11',
        emoji: '',
        title: '#calmo',
        value: 11 * fraction
    },
    {
        id: '15',
        emoji: '',
        title: '#feliz',
        value: 15 * fraction
    }
]
