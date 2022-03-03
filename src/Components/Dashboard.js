import { React, Component } from 'react'
import Discord from './Discord.js'
import News from './News.js'
import Twitch from './Twitch.js'
import Commands from './Commands.js'

class Dashboard extends Component {
    render() {
        return (
            <div className="Container">
                <h2>This is my dashboard!</h2>
                <table>
                    <tr>
                        <td>
                            <Discord />
                        </td>
                        <td>
                            <News />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Twitch />
                        </td>
                        <td>
                            <Commands />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Dashboard;