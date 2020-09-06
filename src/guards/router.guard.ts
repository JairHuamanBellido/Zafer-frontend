class RouteGuard {
  valid = () => localStorage.getItem('token');
}
export default new RouteGuard();
