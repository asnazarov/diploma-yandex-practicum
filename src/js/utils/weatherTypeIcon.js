const weatherTypeIcon = (dataIcon, type, isDay) => {
    const dataIconText = dataIcon ? dataIcon : console.log('Загрузка')
    let weatherIcon;

    // Пасмурная погода
    if (dataIconText == 'Clouds' || type == 'пасмурно') { weatherIcon = 'https://svgshare.com/i/QUz.svg' }

    // Дождь
    if (dataIconText == 'Rain') { weatherIcon = 'https://svgshare.com/i/QUm.svg' }

    // Переменная облачность - день
    isDay == true && (
            dataIconText == 'Partly cloudy' ||
            type == 'облачно с прояснениями' ||
            type == 'небольшая облачность' ||
            type == 'переменная облачность') ?
        weatherIcon = 'https://svgshare.com/i/QU6.svg' : null;

    // Переменная облачность - ночь
    isDay == false && (
            dataIconText == 'Partly cloudy' ||
            type == 'переменная облачность' ||
            type == 'небольшая облачность' ||
            type == 'облачно с прояснениями'
        ) ?
        weatherIcon = 'https://svgshare.com/i/QUu.svg' : null

    // Небольшой дождь
    let lightRain = [
        'Light Rain Shower',
        'Light Rain',
        'Moderate rain',
        'небольшой дождь'
    ]
    lightRain.filter(item => item === type).join('') === type && (weatherIcon = 'https://svgshare.com/i/QSr.svg')

    // Ясно - день
    isDay == true && (dataIconText == 'Sunny' || dataIconText == 'Clear') ?
        weatherIcon = 'https://svgshare.com/i/QUp.svg' : null

    // Ясно - ночь
    isDay == false && (dataIconText == 'Clear') ?
        weatherIcon = 'https://svgshare.com/i/QUy.svg' : null

    // Туман
    const atmosphere = [
        'Mist',
        'Smoke',
        'Haze',
        'Dust',
        'Fog',
        'Sand',
        'Ash',
        'Squall',
        'Tornado'
    ]
    atmosphere.filter(item => item === dataIconText).join('') === dataIconText && (weatherIcon = 'https://svgshare.com/i/QUE.svg')


    // Снегопад
    if (dataIconText == 'Heavy snow' || dataIconText == 'Snow') { weatherIcon = 'https://svgshare.com/i/QUb.svg' }

    return weatherIcon
}

export { weatherTypeIcon }