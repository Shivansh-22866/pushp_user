import { getOrders } from "@/lib/actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  console.log('All orders:', JSON.stringify(orders, null, 2));

  return (
    <div className="px-10 py-5 max-sm:px-3">
      <p className="text-heading3-bold my-10">Your Orders</p>
      {!orders ||
        (orders.length === 0 && (
          <p className="text-body-bold my-5">You have no orders yet.</p>
        ))}

      <div className="flex flex-col gap-10">
        {orders?.map((order: OrderType) => {
          console.log('Order:', JSON.stringify(order, null, 2));
          return (
            <div key={order._id} className="flex flex-col gap-8 p-4 hover:shadow-xl hover:bg-[#f9c90e]">
              <div className="flex gap-20 max-md:flex-col max-md:gap-3">
                <p className="text-base-bold">Order ID: {order._id}</p>
                <p className="text-base-bold">
                  Total Amount: ₹{order.totalAmount}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {order.products.map((orderItem: OrderItemType) => {
                  console.log('Order Item:', JSON.stringify(orderItem, null, 2));
                  return (
                    <div key={orderItem._id} className="flex gap-4">
                      {orderItem.product && orderItem.product.media && orderItem.product.media[0] ? (
                        <Image
                          src={orderItem.product.media[0]}
                          alt={orderItem.product.title || 'Product image'}
                          width={100}
                          height={100}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                          No image
                        </div>
                      )}
                      <div className="flex flex-col justify-between">
                        <p className="text-small-medium">
                          Title:{" "}
                          <span className="text-small-bold">
                            {orderItem.product?.title || 'N/A'}
                          </span>
                        </p>
                        {orderItem.color && (
                          <p className="text-small-medium">
                            Color:{" "}
                            <span className="text-small-bold">
                              {orderItem.color}
                            </span>
                          </p>
                        )}
                        {orderItem.size && (
                          <p className="text-small-medium">
                            Size:{" "}
                            <span className="text-small-bold">
                              {orderItem.size}
                            </span>
                          </p>
                        )}
                        <p className="text-small-medium">
                          Unit price:{" "}
                          <span className="text-small-bold">{orderItem.product?.price || 'N/A'}</span>
                        </p>
                        <p className="text-small-medium">
                          Quantity:{" "}
                          <span className="text-small-bold">{orderItem.quantity}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";