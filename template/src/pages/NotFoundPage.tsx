import React from 'react';
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    const event = {
        redirectToHomePage: () => {
            navigate(ROUTES.HOMEPAGE_ROUTE)
        }
    }

    return (
        <div>
            <h1>Oops 404!</h1>
            <span onClick={() => event.redirectToHomePage()}>
                Homepage
            </span>
        </div>
    )
}

export default NotFoundPage
