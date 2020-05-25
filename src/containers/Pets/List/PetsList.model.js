import { message } from 'antd';
import Immutable from 'seamless-immutable';

export default {
  /**
   * State
   */
  state: Immutable({
    loading: false,
    pets: [
      {
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza',
      },
      {
        image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=663&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1516978101789-720eacb59e79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1557166983-5939644443a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1516750484197-6b28d10c91ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1518815068914-038920b6f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1012&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
      {
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80',
        name: 'Gatinho 01',
        address: 'Passaré, Fortaleza'
      },
    ]
  }),
  /**
   * Reducers
   */
  reducers: {
    showLoading: (state, payload) => state.set('count', payload),
    hideLoading: (state, payload) => state.set('count', payload),
  },
  /**
   * Effects 
   */
  effects: dispatch => ({
    fetchPets: (payload, rootState) => {
      try {
        dispatch.petsList.showLoading();
        // call API

      } catch (err) {
        message.error({ content: "error" });
      } finally {
        dispatch.petsList.hideLoading();
      }
    }
  })
};