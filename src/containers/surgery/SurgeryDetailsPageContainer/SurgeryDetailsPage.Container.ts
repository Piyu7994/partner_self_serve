import { connect } from 'react-redux'
import SurgeryDetailsPage, { SurgeryDetailsPageProps } from '../../../components/surgery/SurgeryDetailsPage/SurgeryDetailsPage'

const mapStateToProps = (state: any): SurgeryDetailsPageProps => ({
    hospitalName: 'Apollo Hospital',
    surgeryName: 'Robotic Knee Replacement surgery',
    showRatingButton: true,
    surgeryPrice: {
        minPrice: null,
        maxPrice: null
    },
    pillText: 'Change Cover',
    reviewCount: 222,
    rating: 60,
    surgeryDescriptionQuestion: null,
    surgeryDescription: null,
    showMedia: false,
    doctorData: [
        {
            name: 'Dr. Aditi P. Ramachandran',  
            post: 'Dentist Surgeon, Orthodontist',
            fee: 400,
            experience: 18,
            stories: 324
        },
        {
            name: 'Dr. Aditi P. Ramachandran',
            post: 'Dentist Surgeon, Orthodontist',
            fee: 400,
            experience: 18
        },
        {
            name: 'Dr. Aditi P. Ramachandran',
            post: 'Dentist Surgeon, Orthodontist',
            experience: 18,
        }
    ]
})

const mapDispatchToProps = (dispatch: any) => ({
    onRefresh: () => {
        // Here you would typically make an API call
        // For now, we'll just simulate a refresh
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SurgeryDetailsPage)