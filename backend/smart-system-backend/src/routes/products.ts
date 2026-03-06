import { Router, Request, Response } from 'express';
import Product from '../models/Product';

const router = Router();

// GET all products for this seller
router.get('/', async (req: Request, res: Response) => {
  try {
    const sellerId = req.headers['x-clerk-user-id'] as string;
    const products = await Product.find({ sellerId }).sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single product (public)
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST create product
router.post('/', async (req: Request, res: Response) => {
  try {
    const sellerId = req.headers['x-clerk-user-id'] as string;
    const { name, price, stock, description, images } = req.body;

    const whatsappLink = `https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in: ${name} — KES ${price}`)}`;

    const product = await Product.create({
      sellerId,
      name,
      price,
      stock,
      description,
      images: images || [],
      whatsappLink,
    });

    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT update product
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const sellerId = req.headers['x-clerk-user-id'] as string;
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, sellerId },
      req.body,
      { new: true }
    );
    if (!product) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE product
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const sellerId = req.headers['x-clerk-user-id'] as string;
    await Product.findOneAndDelete({ _id: req.params.id, sellerId });
    res.json({ success: true, message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;