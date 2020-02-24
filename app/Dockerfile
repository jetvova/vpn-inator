FROM ubuntu:18.04
RUN apt update && apt -y install openvpn


COPY etc/openvpn/* /etc/openvpn/
COPY runServer.sh /
CMD ["./runServer.sh"]
