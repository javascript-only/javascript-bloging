function translate(english) {
    let result;
    switch(english) {
        case 'korea':
            result = "한국어";
            break;
        case 'japan':
            result = "일본어";
            break;
        case 'francas':
           result = "프랑스어";
           break;
        case 'italian':
            result = "이탈리아어";
            break;
        case 'Portuguese':
            result = "포루투갈어";
            break; 
        default: 
           result = "일치하는 언어가 없습니다.";
    }
     return result;
     
}

 