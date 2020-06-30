from cars.viewsets import CarViewset
from client.viewsets import ClientViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('veiculo',CarViewset)
router.register('cliente', ClientViewset)

# localhost:p/api/employee/5
# GET, POST, PUT, DELETE
# list , retrive