import React from 'react'
import Work from './Work'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core'

class Profile extends React.Component {

  render() {
    const myIconPath = "images/main.jpg"
    const lessonList = [
      {
        name: 'Reversi',
        image: 'images/reversi-icon.png',
        introduction: 'React.jsで作成したオセロです。',
        introduction_image: 'images/reversi-img-2.png',
      },
      {
        name: 'LINE Bot',
        image: 'images/LINE-BOT-icon.png',
        introduction: 'JS,Dialogflowを使用して作成したLINE Botです。クーポンの割引計算や、割り勘の計算ができます。',
        introduction_image: 'images/line-bot-img.jpg',
      },
      {
        name: 'Ichigojam',
        image: 'images/game-icon.png',
        introduction: 'BASICで作成したイチゴ回収ゲームです。',
        introduction_image: 'images/ichigo-img.png',
      },
    ];

    return (
      <React.Fragment>

        <div className='profile'>
          <h1>Profile</h1>
          <div className='profile-icon'>
            <img src={myIconPath} />
          </div>
          <TableContainer >
            <Table className="profile-info">
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    <h2>Name</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>東口 新</h2>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    <h2>From</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>兵庫県</h2>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    <h2>School</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>京都工芸繊維大学 工芸科学科 情報工学課程</h2>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    <h2>Hoby</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>ボードゲーム,読書,散歩</h2>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className='lesson-container'>
          <h1>Works</h1>
          {lessonList.map((lessonItem, index) => {
            return (
              <Work
                name={lessonItem.name}
                image={lessonItem.image}
                introduction={lessonItem.introduction}
                introduction_image={lessonItem.introduction_image}
                key={index}
              />
            )
          })}
        </div>
        <div class="contact">
          <h1>Contact</h1>
          <TableContainer >
            <Table className="profile-info">
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    <h2>E-mail</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>arata.higashiguchi@gmail.com</h2>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </React.Fragment>
    )
  }
}

export default Profile