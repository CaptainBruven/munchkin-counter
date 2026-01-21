import { useNavigate } from '@solidjs/router'
import Button from '../../ui/Button/Button';

const Default = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate('/team')}>
                <span>Hero</span>
            </Button>
        </div>
    )
}

export default Default