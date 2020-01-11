import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer 5pTdklRwLrbt-DlihwR5pvec7VEws5fVUaq9b0K86K8KewFX039csrl0KrhdfmqiSDwI42VE_Vx_Ul4hCcWi-TiGtgRIGNKAuiy0CC7od7qLIdZMrDadjSuGLXTVXXYx'
	}
});
