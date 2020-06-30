from cars.viewsets import CarViewset
from client.viewsets import ClientViewset
from seg.viewsets import SegViewset
from services.viewsets import ServiceViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('veiculo',CarViewset)
router.register('cliente', ClientViewset)
router.register('seguradora', SegViewset)
router.register('locacao', ServiceViewset)


# localhost:p/api/employee/5
# GET, POST, PUT, DELETE
# list , retrive