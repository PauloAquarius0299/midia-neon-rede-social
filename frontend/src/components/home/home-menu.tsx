import Logo from '../ui/logo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import {SearchInput} from '../ui/search-input'
import NavItem from '../navbar/nav-item';
import NavLogout from '../navbar/nav-logout';

type Props = {
    closeAction: () => void;
}

export const HomeMenu = ({closeAction}: Props) => {
    return (
        <div className='lg:hidden fixed inset-0 p-6 bg-[#000110]'>
            <div className='flex justify-between items-center'>
                <Logo size={80} />
                <div onClick={closeAction} className='cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-gray-900'>
                    <FontAwesomeIcon icon={faXmark} className='size-6' />
                </div>
            </div>
            <div className='my-6'>
                <SearchInput />
            </div>
            <div>
                       <NavItem 
                        href='/home'
                        icon={faHouse}
                        label='Pagina inicial'
                        />
                        <NavItem 
                        href='/profile'
                        icon={faUser}
                        label='Meu Perfil'
                        />
                        <NavLogout />
            </div>
        </div>
    )
}