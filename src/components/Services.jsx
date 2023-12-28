import { BsAndroid2, BsApple } from "react-icons/bs";
import { DiRedis } from "react-icons/di";
import { FaChrome, FaLinux, FaNode, FaReact } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { SiInfluxdb, SiMongodb, SiMysql, SiSmartthings, SiWindows } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const ICON_SIZE = 20
const ICON_COLOR = `rgb(100 116 139)`


export default function Services() {
    return <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">


        <div className="card-compact rounded-2xl sm:card-normal bg-base-100 shadow-2xl">

            <div className="card-body">
                <h5 className="text-xl font-semibold text-center">Fronend Development</h5>
                <p className="text-xs mb-4  text-center">For Web And Mobile Platforms</p>
                <table class="table">
                    <tbody>
                        <tr>
                            <td><FaReact size={ICON_SIZE} color={ICON_COLOR} /></td>
                            <td>React</td>
                            <td>
                                <FaChrome size={ICON_SIZE} color={ICON_COLOR} />
                            </td>
                        </tr>
                        <tr>
                            <td><TbBrandReactNative size={ICON_SIZE} color={ICON_COLOR} /></td>
                            <td>React Native</td>
                            <td className="flex row-auto gap-3">
                                <BsAndroid2 size={ICON_SIZE + 2} color={ICON_COLOR} />
                                <BsApple size={ICON_SIZE + 2} color={ICON_COLOR} />
                            </td>
                        </tr>
                        <tr>
                            <td><IoLogoElectron size={ICON_SIZE} color={ICON_COLOR} /></td>
                            <td>Electron</td>
                            <td className="flex row-auto gap-3 ">
                                <SiWindows size={ICON_SIZE - 3} color={ICON_COLOR} />
                                <FaLinux size={ICON_SIZE} color={ICON_COLOR} />
                                <BsApple size={ICON_SIZE} color={ICON_COLOR} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="card-compact rounded-2xl sm:card-normal bg-base-100 shadow-2xl">

            <div className="card-body">
                <h5 className="text-xl font-semibold text-center">Backend Development</h5>
                <p className="text-xs mb-4  text-center">For High Availability</p>
                <table class="table">
                    <tbody>
                        <tr>
                            <td><FaNode size={ICON_SIZE} color={ICON_COLOR} /></td>
                            <td>REST API Service</td>
                        </tr>
                        <tr>
                            <td><SiSmartthings size={ICON_SIZE} color={ICON_COLOR} /></td>
                            <td>Internet Of Things</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="card-compact rounded-2xl sm:card-normal bg-base-100 shadow-2xl">
            <div className="card-body">
                <h5 className="text-xl font-semibold text-center">Database Design</h5>
                <p className="text-xs mb-4  text-center">For Faster And Optimal Data Storage</p>
                <table class="table">
                    <tbody>
                        <tr>
                            <td><SiMysql size={ICON_SIZE} color={ICON_COLOR} /></td>
                            <td>MySQL</td>
                        </tr>
                        <tr>
                            <td><SiMongodb size={ICON_SIZE} color={ICON_COLOR} /></td>
                            <td>MongoDB</td>
                        </tr>
                        <tr>
                            <td><DiRedis size={ICON_SIZE} color={ICON_COLOR} /></td>
                            <td>Redis</td>
                        </tr>
                        <tr>
                            <td><SiInfluxdb size={ICON_SIZE} color={ICON_COLOR} /></td>
                            <td>InfluxDB (Time Series Database)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>

}
