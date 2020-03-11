import React from 'react'
import Work from './Work'

class Profile extends React.Component {

  render() {
    const myIconPath="img/main.jpg"
    const lessonList = [
      {
        name: 'Reversi',
        image: 'img/reversi-icon.png',
        introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
        introduction_image: 'img/reversi-img.png',
      },
      {
        name: 'LINE Bot',
        image: 'img/LINE-BOT-icon.png',
        introduction: 'SassはCSSをより便利に効率的にするための言語です。',
        introduction_image: 'img/line-bot-img.jpg',
      },
      {
        name: 'Ichigojam',
        image: 'img/game-icon.png',
        introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
        introduction_image: 'img/ichigo-img.png',
      },
    ];

    return (
      <React.Fragment>
        <div className='profile'>
          <div className='profile-icon'>
            <img src={myIconPath}/>
          </div>
          <h1>東口新</h1>
          <h2>京都工芸繊維大学 工芸科学科 情報工学課程</h2>
          
        </div>
        <div className='lesson-container'>
          {lessonList.map((lessonItem) => {
            return (
              <Work
                name={lessonItem.name}
                image={lessonItem.image}
                introduction={lessonItem.introduction}
                introduction_image={lessonItem.introduction_image}
              />
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default Profile