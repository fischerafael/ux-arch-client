export interface IEvaluationOptions {
    id: string
    emoji: string
    title: string
    value: number
    active?: boolean
    hashtags?: string
}

const fraction = 1 / 7

export const evaluationOptions = [
    {
        id: '0',
        emoji: '😬',
        title: 'Extremamente Desagradável',
        value: 0 * fraction,
        active: false,
        hashtags: '#nervoso #tenso'
    },
    {
        id: '1',
        emoji: '😂',
        title: 'Extremamente Agradável',
        value: 4 * fraction,
        active: false,
        hashtags: '#excitado #surpreso'
    },
    {
        id: '2',
        emoji: '😤',
        title: 'Muito Desagradável',
        value: 1 * fraction,
        active: false,
        hashtags: '#chateado #estressado'
    },
    {
        id: '3',
        emoji: '😁',
        title: 'Muito Agradável',
        value: 5 * fraction,
        active: false,
        hashtags: '#feliz #eufórico'
    },
    {
        id: '4',
        emoji: '😟',
        title: 'Desagradável',
        value: 2 * fraction,
        active: false,
        hashtags: '#triste #deprimido'
    },
    {
        id: '5',
        emoji: '😉',
        title: 'Agradável',
        value: 6 * fraction,
        active: false,
        hashtags: '#contente #sereno'
    },
    {
        id: '6',
        emoji: '😴',
        title: 'Levemente Desagradável',
        value: 3 * fraction,
        active: false,
        hashtags: '#fatigado #letárgico'
    },
    {
        id: '7',
        emoji: '🙂',
        title: 'Levemente Agradável',
        value: 7 * fraction,
        active: false,
        hashtags: '#relaxado #calmo'
    }
]

export const evaluationOptionsLegacy: IEvaluationOptions[] = [
    {
        id: '0',
        emoji: '😬',
        title: '#tenso',
        value: 0 * fraction,
        active: false
    },
    {
        id: '4',
        emoji: '😥',
        title: '#triste',
        value: 4 * fraction,
        active: false
    },
    {
        id: '8',
        emoji: '😄',
        title: '#contente',
        value: 8 * fraction,
        active: false
    },
    {
        id: '12',
        emoji: '😮',
        title: '#alerta',
        value: 12 * fraction,
        active: false
    },
    {
        id: '1',
        emoji: '😣',
        title: '#nervoso',
        value: 1 * fraction,
        active: false
    },
    {
        id: '5',
        emoji: '😟',
        title: '#deprimido',
        value: 5 * fraction,
        active: false
    },
    {
        id: '9',
        emoji: '😉',
        title: '#sereno',
        value: 9 * fraction,
        active: false
    },
    {
        id: '13',
        emoji: '😜',
        title: '#excitado',
        value: 13 * fraction,
        active: false
    },
    {
        id: '2',
        emoji: '😤',
        title: '#estressado',
        value: 2 * fraction,
        active: false
    },
    {
        id: '6',
        emoji: '😴',
        title: '#letárgico',
        value: 6 * fraction,
        active: false
    },
    {
        id: '10',
        emoji: '🙃',
        title: '#relaxado',
        value: 10 * fraction,
        active: false
    },
    {
        id: '14',
        emoji: '😂',
        title: '#eufórico',
        value: 14 * fraction,
        active: false
    },
    {
        id: '3',
        emoji: '😩',
        title: '#chateado',
        value: 3 * fraction,
        active: false
    },
    {
        id: '7',
        emoji: '🙄',
        title: '#fatigado',
        value: 7 * fraction,
        active: false
    },
    {
        id: '11',
        emoji: '🙂',
        title: '#calmo',
        value: 11 * fraction,
        active: false
    },
    {
        id: '15',
        emoji: '😁',
        title: '#feliz',
        value: 15 * fraction,
        active: false
    }
]
