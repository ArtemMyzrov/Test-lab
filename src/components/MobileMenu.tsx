import '../App.css'
interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const handleMenuItemClick = () => {
        onClose()
    };
    return (
        <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div className="menu-header">
                <div className="logo"><p>testLab</p></div>
                <button className="close-button" onClick={onClose}>×</button>
            </div>
            <div className="menu-divider"></div>
            <ul className="menu-list">
                <li><a href="#how-it-works" onClick={handleMenuItemClick}>Как это работает</a><img src="/arrow-menu.svg" alt="" /></li>
                <div className="menu-divider"></div>
                <li><a href="#testimonials" onClick={handleMenuItemClick}>3-й блок</a><img src="/arrow-menu.svg" alt="" /></li>
                <div className="menu-divider"></div>
                <li><a href="#faq" onClick={handleMenuItemClick}>Вопросы и ответы</a><img src="/arrow-menu.svg" alt="" /></li>
                <div className="menu-divider"></div>
                <li><a href="#form" onClick={handleMenuItemClick}>Форма</a><img src="/arrow-menu.svg" alt="" /></li>
            </ul>
        </nav>
    );
}
